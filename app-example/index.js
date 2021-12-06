import * as tropa from '../lib'
import path from 'path'
import * as http from 'http'
import AppHooks from './hooks'

async function bootstrap() {
  tropa.setHooks(AppHooks)
  tropa.setApiPrefix('/api/v1')

  await tropa.loadControllers(path.resolve(__dirname, './controllers'))

  const server = http.createServer(tropa.listener)

  server.listen(3000, () => console.log('Server started on port 3000'))
}

bootstrap().catch(e => {
  console.error(e)

  process.exit(-1)
})