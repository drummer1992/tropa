import { NOT_FOUND_ERROR } from '../errors'
import { Argument as a } from './constants'
import bodyParser from '../utils/body-parser'

const argumentProviders = {
  [a.BODY]    : async (url, { request }) => request.body ??= await bodyParser(request.raw),
  [a.QUERY]   : (url, { request }) => request.query ??= url.parseQuery(request.raw.url),
  [a.PARAM]   : (url, { request }) => request.params ??= url.parseParams(request.raw.url),
  [a.REQUEST] : (url, { request }) => request,
  [a.RESPONSE]: (url, { response }) => response,
  [a.CONTEXT] : (url, ctx) => ctx,
}

const parseArgument = async (url, argMeta, ctx) => {
  const argument = await argumentProviders[argMeta.type](url, ctx)

  return argMeta.attribute ? argument?.[argMeta.attribute] : argument
}

export default class RouteMeta {
  constructor() {
    this.url = undefined
    this.handler = undefined
    this.statusCode = undefined
    this.headers = undefined
    this.arguments = []
  }

  parseArguments(ctx) {
    return Promise.all(this.arguments.map(argMeta => parseArgument(this.url, argMeta, ctx)))
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

/* eslint-disable require-await */
notFoundRoute.setHandler(async () => {
  throw NOT_FOUND_ERROR
})

export { notFoundRoute }