import { asyncContextStorage } from './storage'
import { randomCode } from '../utils/random'
import Keys from '../symbols'
import { HttpCode as c } from '../codes'
import { Header as h } from '../meta/constants'

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
    this[Keys.kHandovered] = false
    this[Keys.kResponse] = res
    this.statusCode = undefined
    this.headers = undefined
    this.body = undefined
  }

  get raw() {
    this[Keys.kHandovered] = true

    return this[Keys.kResponse]
  }

  get handovered() {
    return this[Keys.kHandovered]
  }

  end({ statusCode, headers, body } = {}) {
    if (this.handovered) return

    this.statusCode ??= statusCode
    this.headers ??= headers
    this.body ??= body

    this.raw.writeHead(
      this.statusCode || c.OK,
      this.headers || { [h.Key.contentType]: h.Value.applicationJson },
    )

    this.raw.end(JSON.stringify(this.body))
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
}