import Endpoint from './endpoint'
import * as meta from '../meta'
import { setControllerPrefix } from '../meta'
import Url from '../utils/url'
import Context from '../context'

export function Controller(prefix) {
  return function (Clazz) {
    setControllerPrefix(Clazz, Url.trim(prefix))

    return Clazz
  }
}

export function StatusCode(code) {
  return function (target, property, descriptor) {
    const endpoint = descriptor.value

    descriptor.value = async function (...args) {
      const response = await endpoint.apply(this, args)

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
  return addArgumentMeta('body', attribute)
}

export function Param(attribute) {
  return addArgumentMeta('params', attribute)
}

export function Query(attribute) {
  return addArgumentMeta('query', attribute)
}

export function Request() {
  return addArgumentMeta('request')
}

export function Response() {
  return addArgumentMeta('response')
}