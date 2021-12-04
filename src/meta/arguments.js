import { Argument as a } from './constants'
import bodyParser from '../utils/body-parser'
import Context from '../context'

const argumentProviders = {
  [a.QUERY]   : (url, { request }) => request.query = url.parseQuery(request.url),
  [a.PARAM]   : (url, { request }) => request.params = url.parseParams(request.url),
  [a.REQUEST] : (url, { request }) => request.raw,
  [a.RESPONSE]: (url, { response }) => response.raw,
  [a.BODY]    : async (url, { request }) =>
    request.body = await bodyParser(request.raw),
}

const processArgument = async (url, meta) => {
  const provide = argumentProviders[meta.type]
  const argument = await provide(url, Context.get())

  return meta.attribute ? argument?.[meta.attribute] : argument
}

export const parseArguments = route =>
  Promise.all(route.arguments.map(meta => processArgument(route.url, meta)))