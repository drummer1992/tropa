import * as meta from '../meta'
import Url from '../utils/url'
import { Argument as a } from '../meta/constants'
import Decorate from './decorate'
import { identity } from '../utils/function'
import { isFunction } from '../utils/predicates'
import { HttpCode as c } from '../constants'

export const Prefix = prefix => Controller => meta.setControllerPrefix(Controller, Url.trim(prefix))
export const StatusCode = code => (target, property) => meta.setRouteStatusCode(target.constructor, property, code)
export const Headers = headers => (target, property) => meta.setRouteHeaders(target.constructor, property, headers)

export const Redirect = url => (target, property) => {
  meta.setRouteStatusCode(target.constructor, property, c.FOUND)
  meta.setRouteHeaders(target.constructor, property, { Location: url })
}

const endpoint = (httpMethod, pattern) => (target, method) => {
  meta.addRouteMeta(target.constructor, method, new Url(httpMethod, pattern))
}

export const Get = path => endpoint('GET', path)
export const Post = path => endpoint('POST', path)
export const Patch = path => endpoint('PATCH', path)
export const Put = path => endpoint('PUT', path)
export const Delete = path => endpoint('DELETE', path)

const addArgumentMeta = (type, args = []) => (target, methodName, index) => {
  const attribute = isFunction(args[0]) ? null : args[0]
  const mapFn = (isFunction(args[0]) && args[0]) || (isFunction(args[1]) && args[1])

  meta.addArgumentMeta(target.constructor, methodName, index, {
    type,
    attribute,
    mapFn: mapFn || identity,
  })
}

export const Body = (...args) => addArgumentMeta(a.BODY, args)
export const Param = (...args) => addArgumentMeta(a.PARAM, args)
export const Query = (...args) => addArgumentMeta(a.QUERY, args)
export const Request = attr => addArgumentMeta(a.REQUEST, [attr])
export const Response = attr => addArgumentMeta(a.RESPONSE, [attr])
export const Context = () => addArgumentMeta(a.CONTEXT)

export { Decorate }