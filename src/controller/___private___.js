import {InternalError} from '../errors'

export const EndpointsByController = new Map()
export const RegExpByController = new Map()

let apiPrefix = ''

export const setApiPrefix = value => apiPrefix = value
export const getApiPrefix = () => apiPrefix

export const findMethodName = (Controller, url, method) => {
  const ENDPOINTS = EndpointsByController.get(Controller) || []
  const regExp = RegExpByController.get(Controller)

  const path = url.replace(regExp, '')

  const endpoint = ENDPOINTS.find(endpoint => {
    const sameMethod = endpoint.method === method
    const regexpIsMatched = endpoint.regExp.test(path)

    return sameMethod && regexpIsMatched
  })

  return endpoint?.methodName
}

export const setControllerRegExp = (Controller, regExp) => {
  if (RegExpByController.has(Controller)) {
    throw new InternalError('RegExp has already been set')
  }

  RegExpByController.set(Controller, regExp)
}

export const addEndpoint = (Controller, endpoint) => {
  if (!EndpointsByController.has(Controller)) {
    EndpointsByController.set(Controller, [])
  }

  const endpoints = EndpointsByController.get(Controller)

  endpoints.push(endpoint)
}

export const isProperlyController = (Controller, url) => {
  const regExp = RegExpByController.get(Controller)

  if (!regExp) {
    throw new InternalError(`${this.name} controller doesn't have a pattern`)
  }

  return new RegExp(regExp.source + '([^\\w]|$)').test(url)
}

export const getRelativeController = url => {
  for (const Controller of EndpointsByController.keys()) {
    if (isProperlyController(Controller, url)) {
      return Controller
    }
  }
}