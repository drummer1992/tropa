import Url from '../utils/url'
import ControllerMeta from './controller'
import Hooks from '../hooks'
import { internalAssert } from '../errors'
import { appMeta, controllersMeta } from './storage'
import { notFoundRoute } from './route'
import { App } from './constants'

export const findRoute = (url, method) => {
  const controllers = Array.from(controllersMeta.values())

  for (const controllerMeta of controllers) {
    if (controllerMeta.isSuitable(url)) {
      return controllerMeta.findRoute(url, method)
    }
  }

  return notFoundRoute
}

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

export const setRouteStatusCode = (Controller, method, code) => {
  controllersMeta.get(Controller).getRoute(method).setStatusCode(code)
}

export const setRouteHeaders = (Controller, method, headers) => {
  controllersMeta.get(Controller).getRoute(method).setHeaders(headers)
}

export const addArgumentMeta = (Controller, method, { index, type, attribute }) => {
  initControllerMeta(Controller)

  const controllerMeta = controllersMeta.get(Controller)
  const methodMeta = controllerMeta.getRoute(method)

  methodMeta.addArgument(type, attribute, index)
}

export const setApiPrefix = prefix => appMeta.set(App.PREFIX, Url.trim(prefix))

export const setHooks = CustomHooks => {
  internalAssert(CustomHooks.prototype instanceof Hooks,
    'hooks should be subclass of Hooks')

  appMeta.set(App.HOOKS, new CustomHooks())
}

export const getHooks = () => appMeta.get(App.HOOKS)