import Url from '../utils/url'
import bodyParser from '../utils/body-parser'
import * as meta from '../meta'
import { getRouteArguments } from '../meta'
import Context from '../context'

const argumentsProviders = {
  query   : (url, { request }) => url.parseQuery(request.url),
  params  : (url, { request }) => url.parseParams(request.url),
  body    : (url, { request }) => bodyParser(request.raw),
  request : (url, { request }) => request.raw,
  response: (url, { response }) => response.raw,
}

const provideArgument = async (url, meta) => {
  const provide = argumentsProviders[meta.type]
  const data = await provide(url, Context.get())

  return meta.attribute ? data?.[meta.attribute] : data
}

const mapArguments = (url, target, method) => {
  const argsMeta = getRouteArguments(target.constructor, method)

  return Promise.all(argsMeta.map(meta => provideArgument(url, meta)))
}

export default (httpMethod, pattern) => {
  const url = new Url(httpMethod, pattern)

  return function (target, method, descriptor) {
    const endpoint = descriptor.value

    meta.addRouteMeta(target.constructor, method, url)

    descriptor.value = async function () {
      return endpoint.apply(this, await mapArguments(url, target, method))
    }

    return descriptor
  }
}