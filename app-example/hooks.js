import { TropaHooks } from '../lib'
import logger from './logger'

const compact = (...args) => args.filter(Boolean)
const serialize = value => JSON.stringify(value)

export default class AppHooks extends TropaHooks {
  onRequest(ctx) {
    ctx.start = new Date()
  }

  beforeHandler(ctx) {
    logger.info(compact(
      '[REQ]',
      ctx.request.method,
      ctx.request.url,
      ctx.request.params && 'PARAM: ' + serialize(ctx.request.params),
      ctx.request.query && 'QUERY: ' + serialize(ctx.request.query),
      ctx.request.body && 'BODY: ' + serialize(ctx.request.body),
    ).join(' '))
  }

  onResponse(ctx) {
    if (ctx.response.body) {
      logger.info('[RES] ' + serialize(ctx.response.body))
    }

    const ms = Date.now() - ctx.start.getTime()

    logger.info(`Processing finished. ${ms} ms`)
  }

  errorHandler(err) {
    logger.error(err)

    return err
  }
}