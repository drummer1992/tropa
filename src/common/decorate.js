import { getPrototypeKeys } from '../utils/object'

const decorateMethod = (decorators, descriptor) => {
  const method = decorators.reduce((method, decorator) => decorator(method), descriptor.value)

  descriptor.value = function () {
    return method.apply(this, arguments)
  }

  return descriptor
}

const decorateClass = (decorators, Controller) => {
  getPrototypeKeys(Controller).forEach(property => {
    const descriptor = Object.getOwnPropertyDescriptor(Controller.prototype, property)

    Object.defineProperty(Controller.prototype, property, decorateMethod(decorators, descriptor))
  })
}

const Decorate = (...decorators) => (...args) => {
  const calledOnController = args.length === 1

  if (calledOnController) {
    return decorateClass(decorators, args[0])
  }

  return decorateMethod(decorators, args[args.length - 1])
}

export default Decorate