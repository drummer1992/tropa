import Url from '../utils/url'
import ControllerMeta from './controller'
import { App } from './constants'

const controllersMeta = new Map()

export const findRequestHandler = (url, method) => {
  const values = Array.from(controllersMeta.values())

  for (const controllerMeta of values) {
    const handler = controllerMeta.findRequestHandler(url, method)

    if (handler) {
      return handler
    }
  }
}

export const getRouteArguments = (Controller, method) => {
  const controllerMeta = controllersMeta.get(Controller)

  return controllerMeta.getRoute(method).arguments
}

export const setApiPrefix = prefix => App.prefix = Url.trim(prefix)

export const setControllerPrefix = (Controller, prefix) => {
  const meta = controllersMeta.get(Controller)

  meta.setRegExp(prefix)
}

const initControllerMeta = Controller => {
  if (!controllersMeta.has(Controller)) {
    controllersMeta.set(Controller, new ControllerMeta(Controller))
  }
}

export const addRouteMeta = (Controller, method, urlInstance) => {
  initControllerMeta(Controller)

  controllersMeta.get(Controller).addRoute(method, urlInstance)
}

export const addArgumentMeta = (Controller, method, { index, type, attribute }) => {
  initControllerMeta(Controller)

  const controllerMeta = controllersMeta.get(Controller)
  const methodMeta = controllerMeta.getRoute(method)

  methodMeta.addArgument(type, attribute, index)
}

export const registerControllerInterceptor = (Controller, Interceptor) => {
  controllersMeta.get(Controller).setInterceptor(Interceptor)
}