import Url from '../utils/url'
import { App } from './constants'
import RouteMeta from './route'
import { appMeta } from './storage'
import { getPrototypeKeys } from '../utils/object'
import Keys from '../symbols'

const composeRoutes = Controller => {
  const routes = {}

  getPrototypeKeys(Controller).forEach(property => routes[property] = new RouteMeta())

  return routes
}

const trimControllerPrefix = (url, regExp) => {
  const withoutPrefix = url.replace(regExp, '')

  return Url.isRoot(withoutPrefix) ? '' : withoutPrefix
}

export default class ControllerMeta {
  constructor(Controller) {
    this.Class = Controller
    this.regExp = new RegExp(`^${appMeta.get(App.PREFIX)}`)
    this.routes = composeRoutes(Controller)
  }

  get methods() {
    return Object.keys(this.routes)
  }

  get instance() {
    if (!this[Keys.KInstance]) {
      this[Keys.KInstance] = new this.Class()
    }

    return this[Keys.KInstance]
  }

  findRoute(url, httpMethod) {
    const routeUrl = trimControllerPrefix(url, this.regExp)

    const byUrl = method => this.getRoute(method).isSuitable(routeUrl, httpMethod)

    const method = this.methods.find(byUrl)

    return this.getRoute(method)
  }

  addRoute(method, urlInstance) {
    this.routes[method].setUrl(urlInstance)
    this.routes[method].setHandler(async (...args) => await this.instance[method](...args))
  }

  setRegExp(prefix) {
    this.regExp = new RegExp(`^${appMeta.get(App.PREFIX)}${prefix}`)
  }

  getRoute(method) {
    return this.routes[method]
  }

  isSuitable(url) {
    return this.regExp.test(url)
  }
}