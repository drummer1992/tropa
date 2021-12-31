import TropaContext from '../context'
import * as meta from '../meta'
import { HttpCode as c } from '../constants'
import reply from './reply'
import { runMiddlewares } from './middleware'

export default (req, res) => runMiddlewares(req, res, async err => {
  const ctx = new TropaContext(req, res)

  const hooks = meta.getHooks()

  try {
    await hooks.onRequest(ctx)

    if (err) { // noinspection ExceptionCaughtLocallyJS
      throw err
    }

    const route = meta.findRoute(ctx.request.url, ctx.request.method)

    await hooks.beforeParsing(ctx)

    const args = await route.parseArguments(ctx)

    await hooks.beforeHandler(ctx)

    ctx.response.body ??= await route.handler(...args)
    ctx.response.statusCode ??= route.statusCode
    ctx.response.headers ??= route.headers
  } catch (err) {
    ctx.response.body = await hooks.errorHandler(err, ctx)
    ctx.response.statusCode ??= err.statusCode
  }

  ctx.response.statusCode ??= c.OK

  res.on('finish', () => hooks.onResponse(ctx))

  if (!ctx.response.handovered) {
    reply(ctx.response)
  }
})