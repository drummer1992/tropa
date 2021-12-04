import { HttpCode as c } from '../codes'
import { asyncContextStorage } from './storage'
import { randomCode } from '../utils/random'
import Keys from '../symbols'

class Request {
  constructor(req) {
    this[Keys.kRequest] = req
    this.id = randomCode(4)
    this.url = req.url
    this.method = req.method
    this.headers = { ...req.headers }
    this.params = undefined
    this.query = undefined
    this.body = undefined
  }

  get raw() {
    return this[Keys.kRequest]
  }
}

class Response {
  constructor(res) {
    this[Keys.kShouldReply] = true
    this[Keys.kResponse] = res
    this.statusCode = c.OK
    this.headers = {}
    this.body = undefined
  }

  get raw() {
    this[Keys.kShouldReply] = false

    return this[Keys.kResponse]
  }

  shouldReply() {
    return this[Keys.kShouldReply]
  }
}

export default class Context {
  constructor(req, res) {
    this[Keys.kRequest] = new Request(req)
    this[Keys.kResponse] = new Response(res)

    asyncContextStorage.enterWith(this)
  }

  get request() {
    return this[Keys.kRequest]
  }

  get response() {
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
    return this.response.shouldReply()
  }
}