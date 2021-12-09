import Url from '../utils/url'
import { App } from './constants'
import RouteMeta from './route'
import { appMeta } from './storage'
import { getPrototypeKeys } from '../utils/object'
import k from '../symbols'

const composeRoutes = Controller => {
  const routes = {}

  getPrototypeKeys(Controller).forEach(property => routes[property] = new RouteMeta())

  return routes
}

const trimUrl = (url, regExp) => {
  const withoutPrefix = url.replace(regExp, '')

  return Url.isRoot(withoutPrefix) ? '/' : Url.trim(withoutPrefix)
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
    if (!this[k.KInstance]) {
      this[k.KInstance] = new this.Class()
    }

    return this[k.KInstance]
  }

  findRoute(url, httpMethod) {
    const routeUrl = trimUrl(url, this.regExp)

    const byUrl = method => this.getRoute(method).isSuitable(routeUrl, httpMethod)

    const method = this.methods.find(byUrl)

    return this.getRoute(method)
  }

  addRoute(method, urlInstance) {
    const handler = async (...args) => await this.instance[method](...args)

    this.getRoute(method).setUrl(urlInstance)
    this.getRoute(method).setHandler(handler)
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