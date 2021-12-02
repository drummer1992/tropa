import Endpoint from './endpoint'
import * as meta from './meta'
import Keys from "../symbols"
import { setControllerPrefix } from "./meta"

export function Controller(prefix) {
  return function (Clazz) {
    setControllerPrefix(Clazz, prefix)

    return Clazz
  }
}

export function StatusCode(code) {
  return function (target, property, descriptor) {
    const endpoint = descriptor.value

    descriptor.value = async function (...args) {
      const response = await endpoint.apply(this, args)

      this[Keys.kContext].setStatusCode(code)

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
  return addArgumentMeta('pathParams', attribute)
}

export function Query(attribute) {
  return addArgumentMeta('queryParams', attribute)
}
