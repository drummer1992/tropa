import { HttpCode as c } from "../codes"

export default class Context {
  constructor(req, res) {
    this.request = {
      raw        : req,
      url        : req.url,
      method     : req.method,
      headers    : { ...req.headers },
      pathParams : null,
      queryParams: null,
      body       : null,
    }

    this.response = {
      raw       : res,
      statusCode: c.OK,
      headers   : {},
      body      : null,
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
}