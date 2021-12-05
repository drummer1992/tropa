import Context from '../context'
import { getPrototypeKeys } from '../utils/object'

const registerInterceptor = (interceptor, descriptor) => {
  const method = descriptor.value

  descriptor.value = function () {
    return interceptor(Context.get(), method.bind(this, arguments))
  }

  return descriptor
}

export const Intercept = interceptor => (...args) => {
  const calledOnController = args.length === 1

  if (calledOnController) {
    const Controller = args[0]

    return getPrototypeKeys(Controller).forEach(property => {
      const descriptor = Object.getOwnPropertyDescriptor(Controller.prototype, property)

      Object.defineProperty(Controller.prototype, property, registerInterceptor(interceptor, descriptor))
    })
  }

  return registerInterceptor(interceptor, args[args.length - 1])
}