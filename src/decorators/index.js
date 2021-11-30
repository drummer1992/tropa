import {addEndpoint, setControllerRegExp, getApiPrefix} from '../controller/___private___'
import {isObject} from '../utils/object'
import URLParser from '../utils/url'
import bodyParser from '../utils/body-parser'

export function Controller(name) {
  return function (Clazz) {
    setControllerRegExp(Clazz, new RegExp(`^${getApiPrefix()}${name === '/' ? '' : name}`))

    return Clazz
  }
}

export function StatusCode(code) {
  return function (instance, methodName, descriptor) {
    const endpoint = descriptor.value

    descriptor.value = async function (...args) {
      const response = await endpoint.apply(this, args)

      this.setStatusCode(code)

      return response
    }

    return descriptor
  }
}

const resolveOptions = pathOrOptions => isObject(pathOrOptions)
  ? pathOrOptions
  : {path: pathOrOptions, parseBody: true}

function Endpoint(method, pathOrOptions) {
  const options = resolveOptions(pathOrOptions)

  const urlParser = new URLParser(options.path)

  return function (instance, methodName, descriptor) {
    const endpoint = descriptor.value

    addEndpoint(instance.constructor, {
      method,
      methodName,
      regExp: urlParser.getRegExp(),
    })

    descriptor.value = async function () {
      const {pathParams, queryParams} = urlParser.parse(this.request.url)

      this.request.pathParams = pathParams
      this.request.queryParams = queryParams
      this.request.body = options.parseBody ? await bodyParser(this.request.raw) : null

      return endpoint.call(this, {
        body: this.request.body,
        pathParams: this.request.pathParams,
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
