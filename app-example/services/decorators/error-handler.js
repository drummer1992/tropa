export function ErrorHandler(instance, serviceName, descriptor) {
  const method = descriptor.value

  descriptor.value = async function (...args) {
    let result

    try {
      result = await method.apply(this, args)
    } catch (e) {
      result = e
    }

    if (result instanceof Error) {
      this.setStatusCode(result.statusCode)
    }

    return result
  }

  return descriptor
}