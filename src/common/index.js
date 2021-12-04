import Endpoint from './endpoint'
import * as meta from '../meta'
import { registerControllerInterceptor, setControllerPrefix } from '../meta'
import Url from '../utils/url'
import Context from '../context'
import { Argument as a } from '../meta/constants'
import { identity } from '../utils/function'
import Interceptor from '../meta/interceptor'

export function Controller(prefix) {
  return function (Clazz) {
    setControllerPrefix(Clazz, Url.trim(prefix))

    return Clazz
  }
}

export function UseInterceptor(Interceptor) {
  return function (Controller) {
    registerControllerInterceptor(Controller, Interceptor)
  }
}

export function StatusCode(code) {
  return function (target, property, descriptor) {
    const endpoint = descriptor.value

    descriptor.value = async function () {
      const response = await endpoint.apply(this, arguments)

      Context.get().setStatusCode(code)

      return response
    }

    return descriptor
  }
}

export function Get(path) {
  return Endpoint('GET', path)
}

export function Post(path) {
  return Endpoint('POST', path)
}

export function Patch(path) {
  return Endpoint('PATCH', path)
}

export function Put(path) {
  return Endpoint('PUT', path)
}

export function Delete(path) {
  return Endpoint('DELETE', path)
}

const addArgumentMeta = (type, attribute) => (target, methodName, index) => {
  meta.addArgumentMeta(target.constructor, methodName, {
    index,
    type,
    attribute,
  })
}

export function Body(attribute) {
  return addArgumentMeta(a.BODY, attribute)
}

export function Param(attribute) {
  return addArgumentMeta(a.PARAM, attribute)
}

export function Query(attribute) {
  return addArgumentMeta(a.QUERY, attribute)
}

export function Request() {
  return addArgumentMeta(a.REQUEST)
}

export function Response() {
  return addArgumentMeta(a.RESPONSE)
}

export function Catch(handler = identity) {
  return function (target, property, descriptor) {
    const endpoint = descriptor.value

    descriptor.value = async function () {
      let response

      try {
        response = await endpoint.apply(this, arguments)
      } catch (error) {
        response = await handler(error, Context.get())
      }

      return response
    }

    return descriptor
  }
}

export { Interceptor }