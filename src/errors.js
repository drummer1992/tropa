import { HttpCode as c } from './codes'

export class NotFoundError {
  constructor(message = 'Not Found') {
    this.message = message
    this.statusCode = c.NOT_FOUND
    this.name = this.constructor.name
  }
}

export class InternalError extends Error {
  constructor(message) {
    super()

    this.message = message
    this.name = InternalError.name
  }
}

export const internalAssert = (condition, message) => {
  if (!condition) {
    throw new InternalError(message)
  }
}