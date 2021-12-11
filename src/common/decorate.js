import { getPrototypeKeys } from '../utils/object'

const decorateMethod = (decorators, descriptor) => {
  const method = descriptor.value

  descriptor.value = function () {
    const call = decorators.reduce((method, decorate) => decorate(method), method.bind(this))

    return call.apply(this, arguments)
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