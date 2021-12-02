import Keys from "../symbols"

const controllersMeta = new Map()

const appConfig = {
  apiPrefix: '',
}

class ArgumentMeta {
  constructor(type, attribute) {
    this.type = type
    this.attribute = attribute
  }
}

class RouteMeta {
  constructor({ httpMethod, regExp }) {
    this.httpMethod = httpMethod
    this.regExp = regExp
  }

  isSuitable(url, method) {
    return this.httpMethod === method && this.regExp.test(url)
  }
}

class MethodMeta {
  constructor() {
    this.route = null
    this.arguments = []
  }

  addArgument(type, attribute, index) {
    this.arguments[index] = new ArgumentMeta(type, attribute)
  }

  setRoute(route) {
    this.route = route
  }

  isSuitable(url, method) {
    return this.route.isSuitable(url, method)
  }
}

class ControllerMeta {
  constructor(Controller) {
    this.clazz = Controller
    this.regExp = null
    this.urlRegExp = null
    this.routes = {}

    Object.getOwnPropertyNames(Controller.prototype).forEach(property => {
      if (property !== 'constructor') {
        this.routes[property] = new MethodMeta(property)
      }
    })
  }

  get methods() {
    return Object.keys(this.routes)
  }

  isSuitable(url) {
    return this.urlRegExp.test(url)
  }

  setRegExp(prefix) {
    this.regExp = new RegExp(`^${appConfig.apiPrefix}${prefix}`)
    this.urlRegExp = new RegExp(`${this.regExp.source}([^\\w]|$)`)
  }

  addRoute(method, routeInfo) {
    this.routes[method].setRoute(new RouteMeta(routeInfo))
  }

  getRoute(method) {
    return this.routes[method]
  }

  getHandler(url, httpMethod) {
    if (!this.isSuitable(url)) return

    const withoutPrefix = url.replace(this.regExp, '')

    const method = this.methods.find(method => {
      return this.getRoute(method).isSuitable(withoutPrefix, httpMethod)
    })

    return method && (context => {
      const controller = new this.clazz()

      controller[Keys.kContext] = context

      return controller[method]()
    })
  }
}

export const getRequestHandler = (url, method) => {
  const values = [...controllersMeta.values()]

  for (const controllerMeta of values) {
    const handler = controllerMeta.getHandler(url, method)

    if (handler) {
      return handler
    }
  }
}

export const getRouteArguments = (Controller, method) => {
  const controllerMeta = controllersMeta.get(Controller)

  return controllerMeta.getRoute(method).arguments
}

export const setApiPrefix = value => appConfig.apiPrefix = value

export const setControllerPrefix = (Controller, prefix) => {
  const meta = controllersMeta.get(Controller)

  meta.setRegExp(prefix)
}

const initControllerMeta = Controller => {
  if (!controllersMeta.has(Controller)) {
    controllersMeta.set(Controller, new ControllerMeta(Controller))
  }
}

export const addRouteMeta = (Controller, method, routeInfo) => {
  initControllerMeta(Controller)

  controllersMeta.get(Controller).addRoute(method, routeInfo)
}

export const addArgumentMeta = (Controller, method, { index, type, attribute }) => {
  initControllerMeta(Controller)

  const controllerMeta = controllersMeta.get(Controller)
  const methodMeta = controllerMeta.getRoute(method)

  methodMeta.addArgument(type, attribute, index)
}