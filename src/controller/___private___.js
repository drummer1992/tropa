import { InternalError } from '../errors'

export const EndpointsMap = new Map()
export const ControllerPrefixesMap = new Map()

let apiPrefix = ''

export const setApiPrefix = value => apiPrefix = value

export const findEndpointName = (Controller, url, method) => {
  const ENDPOINTS = EndpointsMap.get(Controller) || []
  const prefixRegExp = ControllerPrefixesMap.get(Controller)

  const path = url.replace(prefixRegExp, '')

  const byMethodAndUrl = endpoint => {
    const sameMethod = endpoint.httpMethod === method
    const regexpIsMatched = endpoint.regExp.test(path)

    return sameMethod && regexpIsMatched
  }

  const endpoint = ENDPOINTS.find(byMethodAndUrl)

  return endpoint?.name
}

export const addControllerPrefixRegExp = (Controller, prefix) => {
  if (ControllerPrefixesMap.has(Controller)) {
    throw new InternalError('RegExp has already been set')
  }

  ControllerPrefixesMap.set(Controller, new RegExp(`^${apiPrefix}${prefix}`))
}

export const addEndpoint = (Controller, endpoint) => {
  if (!EndpointsMap.has(Controller)) {
    EndpointsMap.set(Controller, [])
  }

  const endpoints = EndpointsMap.get(Controller)

  endpoints.push(endpoint)
}

export const urlMatches = (Controller, url) => {
  const regExp = ControllerPrefixesMap.get(Controller)

  if (!regExp) {
    throw new InternalError(`${Controller.name} controller doesn't have 'Prefix' decorator assigned`)
  }

  return new RegExp(regExp.source + '([^\\w]|$)').test(url)
}

export const getRelativeController = url => {
  for (const Controller of EndpointsMap.keys()) {
    if (urlMatches(Controller, url)) {
      return Controller
    }
  }
}