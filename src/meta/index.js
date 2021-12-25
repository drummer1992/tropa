import Url from '../utils/url'
import ControllerMeta from './controller'
import TropaHooks from '../hooks'
import { notFoundRoute } from './route'
import { appMeta, controllersMeta } from './storage'
import { App } from './constants'
import assert from 'assert'

export const findRoute = (url, method) => {
  const controllers = Array.from(controllersMeta.values())

  for (const controllerMeta of controllers) {
    if (controllerMeta.isSuitable(url)) {
      const route = controllerMeta.findRoute(url, method)

      if (route) {
        return route
      }
    }
  }

  return notFoundRoute
}

const initControllerMetaIfNeeded = Controller => {
  if (!controllersMeta.has(Controller)) {
    controllersMeta.set(Controller, new ControllerMeta(Controller))
  }
}

export const setControllerPrefix = (Controller, prefix) => {
  initControllerMetaIfNeeded(Controller)

  const controllerMeta = controllersMeta.get(Controller)

  controllerMeta.setRegExp(prefix)
}

export const addRouteMeta = (Controller, method, urlInstance) => {
  initControllerMetaIfNeeded(Controller)

  controllersMeta.get(Controller).addRoute(method, urlInstance)
}

export const setRouteStatusCode = (Controller, method, code) => {
  initControllerMetaIfNeeded(Controller)

  controllersMeta.get(Controller).getRoute(method).setStatusCode(code)
}

export const setRouteHeaders = (Controller, method, headers) => {
  initControllerMetaIfNeeded(Controller)

  controllersMeta.get(Controller).getRoute(method).setHeaders(headers)
}

export const addArgumentMeta = (Controller, method, index, meta) => {
  initControllerMetaIfNeeded(Controller)

  const controllerMeta = controllersMeta.get(Controller)
  const methodMeta = controllerMeta.getRoute(method)

  methodMeta.addArgument(index, meta)
}

export const setApiPrefix = prefix => appMeta.set(App.PREFIX, Url.trim(prefix))

export const setHooks = CustomHooks => {
  assert(CustomHooks?.prototype instanceof TropaHooks, 'hooks should be subclass of TropaHooks')

  appMeta.set(App.HOOKS, new CustomHooks())
}

export const getHooks = () => appMeta.get(App.HOOKS)