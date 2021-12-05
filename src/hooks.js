/* eslint-disable no-unused-vars */
import { INTERNAL_SERVER_ERROR, TropaError } from './errors'

export default class Hooks {
  onRequest(ctx) {

  }

  onResponse(ctx) {

  }

  beforeHandler(ctx) {

  }

  errorHandler(err, ctx) {
    if (!(err instanceof TropaError)) {
      console.error(err.stack)

      err = INTERNAL_SERVER_ERROR
    }

    return err
  }
}