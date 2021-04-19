import { EndpointsByServiceMap, getServiceMethod, isProperlyService } from './___meta-methods___'
import { HttpCode as c } from '../codes'
import { ServiceError } from '../errors'
import { ErrorHandler } from '../decorators/error-handler'

export default class BaseService {
  constructor(req, res) {
    this.req = req
    this.res = res

    this.request = {
      url        : req.url,
      method     : req.method,
      headers    : { ...req.headers },
      pathParams : null,
      queryParams: null,
      body       : null,
    }

    this.response = {
      statusCode: c.OK,
      headers   : {},
    }
  }

  static getCurrentService(url) {
    for (const Service of EndpointsByServiceMap.keys()) {
      if (isProperlyService(Service, url)) {
        return Service
      }
    }
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

  @ErrorHandler
  execute() {
    const serviceMethod = getServiceMethod(this)

    if (!this[serviceMethod]) {
      throw new ServiceError('Service Method Not Found', c.NOT_FOUND)
    }

    return this[serviceMethod]()
  }
}