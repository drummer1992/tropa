import * as meta from '../meta'
import Url from '../utils/url'
import { Argument as a } from '../meta/constants'
import Interceptor from './interceptor'

export const Prefix = prefix => Controller => meta.setControllerPrefix(Controller, Url.trim(prefix))
export const Code = code => (target, property) => meta.setRouteStatusCode(target.constructor, property, code)
export const Headers = headers => (target, property) => meta.setRouteHeaders(target.constructor, property, headers)

const endpoint = (httpMethod, pattern) => (target, method) =>
  meta.addRouteMeta(target.constructor, method, new Url(httpMethod, pattern))

export const Get = path => endpoint('GET', path)
export const Post = path => endpoint('POST', path)
export const Patch = path => endpoint('PATCH', path)
export const Put = path => endpoint('PUT', path)
export const Delete = path => endpoint('DELETE', path)

const addArgumentMeta = (type, attribute) => (target, methodName, index) =>
  meta.addArgumentMeta(target.constructor, methodName, {
    index,
    type,
    attribute,
  })

export const Body = attribute => addArgumentMeta(a.BODY, attribute)
export const Param = attribute => addArgumentMeta(a.PARAM, attribute)
export const Query = attribute => addArgumentMeta(a.QUERY, attribute)
export const Request = () => addArgumentMeta(a.REQUEST)
export const Response = () => addArgumentMeta(a.RESPONSE)
export const Context = () => addArgumentMeta(a.CONTEXT)

export { Interceptor }