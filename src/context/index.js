import { HttpCode as c } from '../codes'
import { asyncContextStorage } from './storage'
import { randomCode } from '../utils/random'
import Keys from '../symbols'

export default class Context {
  constructor(req, res) {
    this[Keys.kShouldReply] = true

    this[Keys.kRequest] = {
      raw    : req,
      id     : randomCode(4),
      url    : req.url,
      method : req.method,
      headers: { ...req.headers },
      params : undefined,
      query  : undefined,
      body   : undefined,
    }

    this[Keys.kResponse] = {
      raw       : res,
      statusCode: c.OK,
      headers   : {},
      body      : undefined,
    }

    asyncContextStorage.enterWith(this)
  }

  get request() {
    return this[Keys.kRequest]
  }

  get response() {
    this[Keys.kShouldReply] = true

    return this[Keys.kResponse]
  }

  static get() {
    return asyncContextStorage.getStore()
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

  shouldReply() {
    return this[Keys.kShouldReply]
  }
}