import { addControllerPrefixRegExp } from '../controller/___private___'
import Endpoint from './endpoint'
import initMeta from './init-meta'
import Keys from '../symbols'

export function Prefix(prefix) {
  return function (Clazz) {
    addControllerPrefixRegExp(Clazz, prefix)

    return Clazz
  }
}

export function StatusCode(code) {
  return function (target, property, descriptor) {
    const endpoint = descriptor.value

    descriptor.value = async function (...args) {
      const response = await endpoint.apply(this, args)

      this.setStatusCode(code)

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

const registerArgumentsMeta = (type, attribute) => (target, property, index) => {
  initMeta(target, property)

  target[Keys.kMeta][property].arguments[index] = { type, attribute }
}

export function Body(attribute) {
  return registerArgumentsMeta('body', attribute)
}

export function Param(attribute) {
  return registerArgumentsMeta('pathParams', attribute)
}

export function Query(attribute) {
  return registerArgumentsMeta('queryParams', attribute)
}
