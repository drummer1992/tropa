/* eslint-disable no-unused-vars */
import { NotFoundError, InternalServerError } from './errors'

export default class TropaHooks {
  onRequest(ctx) {

  }

  onResponse(ctx) {

  }

  beforeParsing(ctx) {

  }

  beforeHandler(ctx) {

  }

  errorHandler(err, ctx) {
    if (!(err instanceof NotFoundError)) {
      console.error(err.stack)

      err = new InternalServerError()
    }

    return err
  }
}