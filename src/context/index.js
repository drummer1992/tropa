import { asyncContextStorage } from './storage'
import { randomCode } from '../utils/random'
import k from '../symbols'

class TropaRequest {
  constructor(req) {
    this[k.kRequest] = req
    this[k.kRequestId] = randomCode(4)
    this.url = req.url
    this.method = req.method
    this.headers = req.headers
    this.params = undefined
    this.query = undefined
    this.body = undefined
  }

  get raw() {
    return this[k.kRequest]
  }

  get id() {
    return this[k.kRequestId]
  }
}

class TropaResponse {
  constructor(res) {
    this[k.kHandovered] = false
    this[k.kResponse] = res
    this.statusCode = undefined
    this.headers = undefined
    this.body = undefined
  }

  get raw() {
    this[k.kHandovered] = true

    return this[k.kResponse]
  }

  get handovered() {
    return this[k.kHandovered]
  }
}

export default class Context {
  constructor(req, res) {
    this[k.kRequest] = new TropaRequest(req)
    this[k.kResponse] = new TropaResponse(res)

    asyncContextStorage.enterWith(this)
  }

  get request() {
    return this[k.kRequest]
  }

  get response() {
    return this[k.kResponse]
  }
}

export const getContext = () => asyncContextStorage.getStore()