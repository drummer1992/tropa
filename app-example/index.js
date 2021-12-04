import tropa from '../src'
import path from 'path'
import * as http from 'http'
import Hooks from '../src/hooks'

class AppHooks extends Hooks {
  onHandler(ctx) {
    console.log(
      new Date().toISOString(),
      `[${ctx.request.id}]`,
      ctx.request.method,
      ctx.request.url,
      JSON.stringify(ctx.request.param),
      JSON.stringify(ctx.request.query),
    )
  }
}

async function bootstrap() {
  tropa.useHooks(AppHooks)
  tropa.setApiPrefix('/api/v2')

  await tropa.loadControllers(path.resolve(__dirname, './controllers'))

  const server = http.createServer(tropa.listener)

  server.listen(3000, () => console.log('Server started on port 3000'))
}

bootstrap().catch(e => {
  console.error(e)

  process.exit(-1)
})