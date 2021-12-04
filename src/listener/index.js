import Context from '../context'
import * as meta from '../meta'
import { NotFoundError } from '../errors'

export default async function requestListener(request, response) {
  const ctx = new Context(request, response)
  const handler = meta.findRequestHandler(request.url, request.method)

  if (handler) {
    ctx.response.body = await handler(ctx)
  } else {
    ctx.response.body = new NotFoundError()
    ctx.setStatusCode(ctx.response.body.statusCode)
  }

  if (ctx.shouldReply()) {
    response.writeHead(ctx.response.statusCode, ctx.response.headers)
    response.end(JSON.stringify(ctx.response.body))
  }
}