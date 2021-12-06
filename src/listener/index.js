import Context from '../context'
import * as meta from '../meta'
import { HttpCode as c } from '../codes'
import reply from './reply'

export default async (req, res) => {
  const ctx = new Context(req, res)

  const hooks = meta.getHooks()

  try {
    await hooks.onRequest(ctx)

    const route = meta.findRoute(req.url, req.method)

    const args = await route.parseArguments()

    await hooks.beforeHandler(ctx)

    ctx.response.body ??= await route.handler(...args)
    ctx.response.statusCode ??= route.statusCode
  } catch (err) {
    ctx.response.body ??= await hooks.errorHandler(err, ctx)
    ctx.response.statusCode ??= err.statusCode
  }

  ctx.response.statusCode ??= c.OK

  res.on('finish', () => hooks.onResponse(ctx))

  if (!ctx.response.handovered) {
    return reply(ctx.response)
  }
}