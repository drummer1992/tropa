/* eslint-disable require-await */
import { NOT_FOUND_ERROR } from '../errors'

export default class RouteMeta {
  constructor() {
    this.url = undefined
    this.handler = undefined
    this.statusCode = undefined
    this.headers = undefined
    this.arguments = []
  }

  addArgument(type, attribute, index) {
    this.arguments[index] = { type, attribute }
  }

  setUrl(urlInstance) {
    this.url = urlInstance
  }

  setHandler(handler) {
    this.handler = handler
  }

  setStatusCode(code) {
    this.statusCode = code
  }

  setHeaders(headers) {
    this.headers = headers
  }

  isSuitable(url, method) {
    return this.url.method === method && this.url.regExp.test(url)
  }
}

const notFoundRoute = new RouteMeta()

notFoundRoute.setHandler(async () => {
  throw NOT_FOUND_ERROR
})

export { notFoundRoute }