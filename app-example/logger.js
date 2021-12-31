import { getContext } from '../lib'
import pino from 'pino-http'

const { logger: defaultLogger } = pino({
  prettyPrint: { translateTime: true },
})

const print = (level, message) => {
  const ctx = getContext()

  if (ctx) {
    const rawReq = ctx.request.raw

    return rawReq.log[level](`[${ctx.request.id}] ${message}`)
  }

  return defaultLogger[level](message)
}

const logger = {
  info : msg => print('info', msg),
  error: msg => print('error', msg),
}

export default logger