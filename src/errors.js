import { HttpCode as c } from './constants'

export class TropaError extends Error {
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

export const NOT_FOUND_ERROR = new NotFoundError()
export const INTERNAL_SERVER_ERROR = new InternalServerError()

Object.freeze(NOT_FOUND_ERROR)
Object.freeze(INTERNAL_SERVER_ERROR)