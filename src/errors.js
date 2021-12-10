import { HttpCode as c } from './constants'

class TropaError extends Error {
  constructor(message, statusCode) {
    super()

    this.message = message
    this.statusCode = statusCode
    this.name = this.constructor.name
  }
}

export class NotFoundError extends TropaError {
  constructor() {
    super('Not Found', c.NOT_FOUND)
  }
}

export class InternalServerError extends TropaError {
  constructor() {
    super('Internal Server Error', c.INTERNAL_SERVER_ERROR)
  }
}