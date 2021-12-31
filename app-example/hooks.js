import { TropaHooks } from '../lib'
import logger from './logger'

const compact = (...args) => args.filter(Boolean)
const serialize = value => JSON.stringify(value)

export default class AppHooks extends TropaHooks {
  onRequest(ctx) {
    ctx.start = new Date()
  }

  beforeHandler(ctx) {
    logger.info(...compact(
      ctx.start.toISOString(),
      `[${ctx.request.id}]`,
      '[REQ]',
      ctx.request.method,
      ctx.request.url,
      ctx.request.params && 'PARAM: ' + serialize(ctx.request.params),
      ctx.request.query && 'QUERY: ' + serialize(ctx.request.query),
      ctx.request.body && 'BODY: ' + serialize(ctx.request.body),
    ))
  }

  onResponse(ctx) {
    const end = new Date()

    logger.info(...compact(
      end.toISOString(),
      `[${ctx.request.id}]`,
      '[RES]',
      ctx.response.body && 'BODY: ' + serialize(ctx.response.body),
    ))

    const ms = end.getTime() - ctx.start.getTime()

    console.log(`[${ctx.request.id}]`, `Processing finished. ${ms} ms`)
  }

  errorHandler(err) {
    logger.error(err.message)

    return err
  }
}