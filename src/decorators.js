import { addEndpoint, getApiPrefix, setApiPrefix, setServiceRegExp } from './_meta'
import { isObject } from "./utils/object"
import Url from "./utils/url"
import { parseBody } from "./utils/body-parser"

export function Service(name) {
  return function(Clazz) {
    setServiceRegExp(Clazz, new RegExp(`^${getApiPrefix()}${name === '/' ? '' : name}`))
  }
}

export function ApiPrefix(prefix) {
  setApiPrefix(prefix)

  return function(Clazz) {
    return Clazz
  }
}

export function StatusCode(code) {
  return function(instance, serviceMethod, descriptor) {
    const endpoint = descriptor.value

    descriptor.value = async function(...args) {
      const response = await endpoint.apply(this, args)

      this.setStatusCode(code)

      return response
    }

    return descriptor
  }
}

const resolveOptions = pathOrOptions => isObject(pathOrOptions)
  ? pathOrOptions
  : { path: pathOrOptions, parseBody: true }

function Endpoint(method, pathOrOptions) {
  const options = resolveOptions(pathOrOptions)

  const url = new Url(options.path)

  return function (instance, serviceMethod, descriptor) {
    const endpoint = descriptor.value

    addEndpoint(instance.constructor, {
      method,
      serviceMethod,
      regExp: url.getRegExp(),
    })

    descriptor.value = async function () {
      this.request.pathParams = url.parsePathParams(this.request.url)
      this.request.queryParams = url.parseQueryParams(this.request.url)

      if (options.parseBody) {
        this.request.body = await parseBody(this._req)
      }

      return endpoint.call(this, {
        body       : this.request.body,
        pathParams : this.request.pathParams,
        queryParams: this.request.queryParams,
      })
    }

    return descriptor
  }
}

export function Get(pathOrOptions) {
  return Endpoint('GET', pathOrOptions)
}

export function Post(pathOrOptions) {
  return Endpoint('POST', pathOrOptions)
}

export function Patch(pathOrOptions) {
  return Endpoint('PATCH', pathOrOptions)
}

export function Put(pathOrOptions) {
  return Endpoint('PUT', pathOrOptions)
}

export function Delete(pathOrOptions) {
  return Endpoint('DELETE', pathOrOptions)
}
