import Url from '../utils/url'
import bodyParser from '../utils/body-parser'
import * as meta from '../meta'
import { getRouteArguments } from '../meta'
import Context from '../context'
import { Argument as a } from '../meta/constants'

const argumentsProviders = {
  [a.QUERY]   : (url, { request }) => request.query = url.parseQuery(request.url),
  [a.PARAM]   : (url, { request }) => request.params = url.parseParams(request.url),
  [a.BODY]    : async (url, { request }) => request.body = await bodyParser(request.raw),
  [a.REQUEST] : (url, { request }) => request.raw,
  [a.RESPONSE]: (url, { response }) => response.raw,
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