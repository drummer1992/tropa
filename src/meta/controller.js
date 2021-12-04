import Url from '../utils/url'
import App from './constants'
import MethodMeta from './method'

const composeRoutes = Controller => {
  const routes = {}

  Object.getOwnPropertyNames(Controller.prototype).forEach(property => {
    if (property !== 'constructor') {
      routes[property] = new MethodMeta(property)
    }
  })

  return routes
}

export default class ControllerMeta {
  constructor(Controller) {
    this.instance = new Controller()
    this.routes = composeRoutes(Controller)
  }

  get methods() {
    return Object.keys(this.routes)
  }

  addRoute(method, urlInstance) {
    this.routes[method].setUrl(urlInstance)
  }

  getRoute(method) {
    return this.routes[method]
  }

  getHandler(url, httpMethod) {
    if (!this.isSuitable(url)) return

    const routeUrl = this.trimControllerPrefix(url)

    const method = this.methods.find(method => {
      return this.getRoute(method).isSuitable(routeUrl, httpMethod)
    })

    return method && (() => this.instance[method]())
  }

  trimControllerPrefix(url) {
    const withoutPrefix = url.replace(this.regExp, '')

    return Url.isRoot(withoutPrefix) ? '' : withoutPrefix
  }

  isSuitable(url) {
    return this.urlRegExp.test(url)
  }

  setRegExp(prefix) {
    this.regExp = new RegExp(`^${App.prefix}${prefix}`)
    this.urlRegExp = new RegExp(`${this.regExp.source}([^\\w]|$)`)
  }
}