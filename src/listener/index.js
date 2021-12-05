import Context from '../context'
import * as meta from '../meta'
import { parseArguments } from '../meta/arguments'
import { notFoundRoute } from '../meta/route'
import { HttpCode as c } from '../codes'
import { Header as h } from '../meta/constants'

export default async function listener(request, response) {
  const ctx = new Context(request, response)

  const hooks = meta.getHooks()

  try {
    await hooks.onRequest(ctx)

    const route = meta.findRoute(request.url, request.method) || notFoundRoute

    const args = await parseArguments(route)

    await hooks.beforeHandler(ctx)

    ctx.response.body ??= await route.handler(...args)
    ctx.response.statusCode ??= route.statusCode
  } catch (err) {
    ctx.response.body ??= await hooks.errorHandler(err, ctx)
    ctx.response.statusCode ??= err.statusCode
  }

  response.on('finish', () => hooks.onResponse(ctx))

  if (!ctx.response.handovered) {
    ctx.response.statusCode ??= c.OK
    ctx.response.headers ??= { [h.Key.contentType]: h.Value.applicationJson }

    response.writeHead(ctx.response.statusCode, ctx.response.headers)
    response.end(JSON.stringify(ctx.response.body))
  }
}