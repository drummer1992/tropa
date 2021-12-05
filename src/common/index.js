import * as meta from '../meta'
import Url from '../utils/url'
import { Argument as a } from '../meta/constants'
import Context from '../context'
import { getPrototypeKeys } from '../utils/object'

export const Prefix = prefix => Controller => {
  meta.setControllerPrefix(Controller, Url.trim(prefix))
}

export const Code = code => (target, property) =>
  meta.setRouteStatusCode(target.constructor, property, code)

export const Headers = headers => (target, property) =>
  meta.setRouteHeaders(target.constructor, property, headers)

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

const registerInterceptor = (interceptor, descriptor) => {
  const method = descriptor.value

  descriptor.value = function () {
    return interceptor(Context.get(), () => method.apply(this, arguments))
  }

  return descriptor
}

export const Intercept = interceptor => (...args) => {
  const calledOnController = args.length === 1

  if (calledOnController) {
    const Controller = args[0]

    return getPrototypeKeys(Controller).forEach(property => {
      const descriptor = Object.getOwnPropertyDescriptor(Controller.prototype, property)

      Object.defineProperty(Controller.prototype, property, registerInterceptor(interceptor, descriptor))
    })
  }

  return registerInterceptor(interceptor, args[args.length - 1])
}