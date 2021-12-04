import Context from '../context'
import * as meta from '../meta'
import { NotFoundError } from '../errors'

const reply = () => {
  const ctx = Context.get()

  ctx.response.raw.writeHead(ctx.response.statusCode, ctx.response.headers)
  ctx.response.raw.end(JSON.stringify(ctx.response.body))
}

const execute = async requestHandler => {
  const ctx = Context.get()

  ctx.response.body = requestHandler
    ? await requestHandler()
    : new NotFoundError()

  if (ctx.response.body instanceof NotFoundError) {
    ctx.setStatusCode(ctx.response.body.statusCode)
  }
}

export default async function requestListener(request, response) {
  Context.create(request, response)

  await execute(meta.getRequestHandler(request.url, request.method))

  reply()
}