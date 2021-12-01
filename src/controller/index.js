import { findEndpointName, getRelativeController } from './___private___'
import { HttpCode as c } from '../codes'
import { ControllerError, NotFoundError } from '../errors'
import Keys from '../symbols'

export default class Controller {
  constructor(req, res) {
    this.request = {
      raw: req,
      url: req.url,
      method: req.method,
      headers: { ...req.headers },
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

    const controller = await new RelativeController(req, res)[Keys.kExecute]()

    res.writeHead(controller.response.statusCode, controller.response.headers)
    res.end(JSON.stringify(controller.response.body))
  }

  async [Keys.kExecute]() {
    const endpointName = findEndpointName(this.constructor, this.request.url, this.request.method)

    this.response.body = this[endpointName] ? await this[endpointName]() : new NotFoundError()

    if (this.response.body instanceof ControllerError) {
      this.setStatusCode(this.response.body.statusCode)
    }

    return this
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