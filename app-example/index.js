import tropa from '../src'
import path from 'path'
import * as http from 'http'
import Hooks from '../src/hooks'
import { ApiError } from './errors'

const compact = (...args) => args.filter(Boolean)
const serialize = value => JSON.stringify(value)

class AppHooks extends Hooks {
  onRequest(ctx) {
    ctx.start = new Date()
  }

  onHandler(ctx) {
    console.log(...compact(
      ctx.start.toISOString(),
      `[${ctx.request.id}]`,
      '[REQ]',
      ctx.request.method,
      ctx.request.url,
      ctx.request.param && 'PARAM: ' + serialize(ctx.request.param),
      ctx.request.query && 'QUERY: ' + serialize(ctx.request.query),
      ctx.request.body && 'BODY: ' + serialize(ctx.request.body),
    ))
  }

  onError(err, ctx) {
    if (!(err instanceof ApiError)) {
      console.error(err)

      err = new ApiError('Internal Server Error', 500)
    }

    ctx.response.statusCode = err.statusCode

    return err
  }

  onResponse(ctx) {
    const end = new Date()

    console.log(...compact(
      end.toISOString(),
      `[${ctx.request.id}]`,
      '[RES]',
      ctx.response.body && 'BODY: ' + serialize(ctx.response.body),
    ))

    const ms = end.getTime() - ctx.start.getTime()

    console.log(`[${ctx.request.id}]`, `Processing finished. ${ms} ms`)
  }
}

async function bootstrap() {
  tropa.useHooks(AppHooks)
  tropa.setApiPrefix('/api/v1')

  await tropa.loadControllers(path.resolve(__dirname, './controllers'))

  const server = http.createServer(tropa.listener)

  server.listen(3000, () => console.log('Server started on port 3000'))
}

bootstrap().catch(e => {
  console.error(e)

  process.exit(-1)
})