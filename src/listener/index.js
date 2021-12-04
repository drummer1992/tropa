import Context from '../context'
import * as meta from '../meta'
import { parseArguments } from '../meta/arguments'

export default async function listener(request, response) {
  const ctx = new Context(request, response)

  const hooks = meta.getHooks()

  await hooks.onRequest(ctx)

  const route = meta.findRoute(ctx.request.url, ctx.request.method)

  const args = await parseArguments(route)

  await hooks.onHandler(ctx)

  const { body, headers, statusCode } = await route.handler(...args)
    .then(result => ({
        statusCode: route.statusCode,
        headers   : route.headers,
        body      : result,
      }),
      async error => ({
        body: await hooks.onError(error, ctx),
      }))

  ctx.response.end({ statusCode, headers, body })

  await hooks.onResponse(ctx)
}