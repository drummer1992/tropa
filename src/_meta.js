import { InternalError } from "./errors"

export const EndpointsByServiceMap = new Map()
export const RegExpByServiceMap = new Map()

let API_PREFIX = ''

export const getServiceMethod = serviceInstance => {
  const Service = serviceInstance.constructor

  const serviceRegExp = RegExpByServiceMap.get(Service)

  const path = serviceInstance.request.url.replace(serviceRegExp, '')

  const ENDPOINTS = EndpointsByServiceMap.get(Service)

  const endpoint = ENDPOINTS.find(endpoint => {
    const sameMethod = endpoint.method === serviceInstance.request.method
    const regexpIsMatched = endpoint.regExp.test(path)

    return sameMethod && regexpIsMatched
  })

  return endpoint?.serviceMethod
}

export const setServiceRegExp = (Service, regExp) => {
  if (RegExpByServiceMap.has(Service)) {
    throw new InternalError('RegExp has already been set')
  }

  RegExpByServiceMap.set(Service, regExp)
}

export const addEndpoint = (Service, endpoint) => {
  if (!EndpointsByServiceMap.has(Service)) {
    EndpointsByServiceMap.set(Service, [])
  }

  const endpoints = EndpointsByServiceMap.get(Service)

  endpoints.push(endpoint)
}

export const isProperlyService = (Service, url) => {
  const regExp = RegExpByServiceMap.get(Service)

  if (!regExp) {
    throw new InternalError(`${this.name} service doesn't have pattern`)
  }

  return new RegExp(regExp.source + '([^\\w]|$)').test(url)
}

export const setApiPrefix = apiPrefix => {
  if (API_PREFIX) {
    throw new InternalError(`Api Prefix already defined '${API_PREFIX}'`)
  }

  API_PREFIX = apiPrefix
}

export const getApiPrefix = () => {
  return API_PREFIX
}