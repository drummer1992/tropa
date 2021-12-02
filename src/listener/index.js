import Context from './context'
import * as meta from '../common/meta'
import { NotFoundError } from '../errors'

const execute = async (requestHandler, context) => {
  context.response.body = requestHandler
      ? await requestHandler(context)
      : new NotFoundError()

  if (context.response.body instanceof NotFoundError) {
    context.setStatusCode(context.response.body.statusCode)
  }
}

export default async function requestListener(request, response) {
  const context = new Context(request, response)

  const handler = meta.getRequestHandler(request.url, request.method)

  await execute(handler, context)

  context.response.raw.writeHead(context.response.statusCode, context.response.headers)
  context.response.raw.end(JSON.stringify(context.response.body))
}