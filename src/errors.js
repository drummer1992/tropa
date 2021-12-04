import { HttpCode as c } from './codes'

export class ControllerError extends Error {
  constructor(message, statusCode) {
    super()

    this.statusCode = statusCode
    this.message = message
    this.name = this.constructor.name
  }
}

export class NotFoundError extends ControllerError {
  constructor() {
    super('Not Found', c.NOT_FOUND)
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