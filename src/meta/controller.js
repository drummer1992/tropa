import Url from '../utils/url'
import { App } from './constants'
import MethodMeta from './method'
import Interceptor from './interceptor'
import { internalAssert } from '../errors'

const composeRoutes = Controller => {
  const routes = {}

  Object.getOwnPropertyNames(Controller.prototype).forEach(property => {
    if (property !== 'constructor') {
      routes[property] = new MethodMeta(property)
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
    this.interceptor = new Interceptor()
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

  findRequestHandler(url, httpMethod) {
    if (!this.isSuitable(url)) return

    const routeUrl = trimControllerPrefix(url, this.regExp)

    const method = this.methods.find(method => {
      return this.getRoute(method).isSuitable(routeUrl, httpMethod)
    })

    return method && (ctx => this.runRequestHandler(method, ctx))
  }

  runRequestHandler(method, ctx) {
    return this.interceptor.intercept(ctx, () => this.instance[method]())
  }

  isSuitable(url) {
    return this.urlRegExp.test(url)
  }

  setRegExp(prefix) {
    this.regExp = new RegExp(`^${App.prefix}${prefix}`)
    this.urlRegExp = new RegExp(`${this.regExp.source}([^\\w]|$)`)
  }

  setInterceptor(ControllerInterceptor) {
    internalAssert(ControllerInterceptor.prototype instanceof Interceptor,
      'interceptor should be subclass of Interceptor')

    this.interceptor = new ControllerInterceptor()
  }
}