import {findMethodName, getRelativeController} from './___private___'
import {HttpCode as c} from '../codes'
import {ControllerError} from '../errors'
import Keys from "../symbols";

export default class BaseController {
  constructor(req, res) {
    this.request = {
      raw: req,
      url: req.url,
      method: req.method,
      headers: {...req.headers},
      pathParams: null,
      queryParams: null,
      body: null,
    }

    this.response = {
      raw: res,
      statusCode: c.OK,
      headers: {},
      body: null,
    }
  }

  static async [Keys.kExecute](req, res) {
    const RelativeController = getRelativeController(req.url) || this
    const controller = new RelativeController(req, res)

    const response = await controller[Keys.kExecute]()

    // TODO: Implement serializers logic
    controller.response.body = response && JSON.stringify(response)

    return controller
  }

  async [Keys.kExecute]() {
    const methodName = findMethodName(this.constructor, this.request.url, this.request.method)

    if (!this[methodName]) {
      this.setStatusCode(c.NOT_FOUND)

      return new ControllerError(`${this.request.method} ${this.request.url}: Not Found`, c.NOT_FOUND)
    }

    return this[methodName]()
  }

  setStatusCode(code) {
    this.response.statusCode = code
  }

  setHeaders(headers) {
    this.response.headers = {
      ...this.response.headers,
      ...headers,
    }
  }
}