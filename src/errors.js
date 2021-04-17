import { StatusCode as c } from "./codes"

export class ServiceError extends Error {
  constructor(message, statusCode) {
    super()

    this.statusCode = statusCode
    this.message = message
    this.name = ServiceError.name
  }
}

export class InternalError extends ServiceError {
  constructor(message = 'Internal Server Error') {
    super()

    this.message = message
    this.statusCode = c.INTERNAL_SERVER_ERROR
    this.name = InternalError.name
  }
}