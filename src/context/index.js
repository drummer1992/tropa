import { HttpCode as c } from '../codes'
import { asyncContextStorage } from './storage'
import { randomCode } from '../utils/random'

export default class Context {
  constructor(req, res) {
    this.request = {
      raw    : req,
      id     : randomCode(4),
      url    : req.url,
      method : req.method,
      headers: { ...req.headers },
      params : null,
      query  : null,
      body   : null,
    }

    this.response = {
      raw       : res,
      statusCode: c.OK,
      headers   : {},
      body      : null,
    }
  }

  static get() {
    return asyncContextStorage.getStore()
  }

  static create(req, res) {
    const context = new this(req, res)

    asyncContextStorage.enterWith(context)

    return context
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