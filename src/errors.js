export class ControllerError extends Error {
  constructor(message, statusCode) {
    super()

    this.statusCode = statusCode
    this.message = message
    this.name = ControllerError.name
  }
}

export class InternalError extends Error {
  constructor(message) {
    super()

    this.message = message
    this.name = InternalError.name
  }
}