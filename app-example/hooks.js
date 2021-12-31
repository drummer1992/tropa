import { TropaHooks } from '../lib'
import logger from './logger'

const compact = (...args) => args.filter(Boolean)
const serialize = value => JSON.stringify(value)

export default class AppHooks extends TropaHooks {
  beforeHandler(ctx) {
    const payload = compact(
      ctx.request.params && 'PARAM: ' + serialize(ctx.request.params),
      ctx.request.query && 'QUERY: ' + serialize(ctx.request.query),
      ctx.request.body && 'BODY: ' + serialize(ctx.request.body),
    )

    if (payload.length) {
      logger.info(payload.join(' '))
    }
  }

  errorHandler(err) {
    logger.error(err)

    return err
  }
}