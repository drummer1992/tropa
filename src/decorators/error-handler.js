import { ServiceError } from '../errors'

export function ErrorHandler(instance, serviceName, descriptor) {
  const method = descriptor.value

  descriptor.value = async function (...args) {
    try {
      return await method.apply(this, args)
    } catch (error) {
      if (error instanceof ServiceError) {
        this.setStatusCode(error.statusCode)

        return error
      }

      throw error
    }
  }

  return descriptor
}