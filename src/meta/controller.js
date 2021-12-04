import Url from '../utils/url'
import { App } from './constants'
import RouteMeta from './route'
import { appMeta } from './storage'

const composeRoutes = Controller => {
  const routes = {}

  Object.getOwnPropertyNames(Controller.prototype).forEach(property => {
    if (property !== 'constructor') {
      routes[property] = new RouteMeta()
    }
  })

  return routes
}

const trimControllerPrefix = (url, regExp) => {
  const withoutPrefix = url.replace(regExp, '')

  return Url.isRoot(withoutPrefix) ? '' : withoutPrefix
}

export default class ControllerMeta {
  constructor(Controller) {
    this.instance = new Controller()
    this.routes = composeRoutes(Controller, this)
  }

  get methods() {
    return Object.keys(this.routes)
  }

  findRoute(url, httpMethod) {
    const routeUrl = trimControllerPrefix(url, this.regExp)

    const byUrl = method => this.getRoute(method).isSuitable(routeUrl, httpMethod)

    const method = this.methods.find(byUrl)

    return this.getRoute(method)
  }

  addRoute(method, urlInstance) {
    const handler = async (...args) => await this.instance[method](...args)

    this.routes[method].setUrl(urlInstance)
    this.routes[method].setHandler(handler)
  }

  setRegExp(prefix) {
    this.regExp = new RegExp(`^${appMeta.get(App.PREFIX)}${prefix}`)
    this.urlRegExp = new RegExp(`${this.regExp.source}([^\\w]|$)`)
  }

  getRoute(method) {
    return this.routes[method]
  }

  isSuitable(url) {
    return this.urlRegExp.test(url)
  }
}