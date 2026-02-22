import * as tropa from '../lib'
import * as path from 'path'
import * as http from 'http'
import * as cors from 'cors'
import pino from 'pino-http'
import AppHooks from './hooks'
import logger from './logger'

async function bootstrap() {
  tropa.setHooks(AppHooks)
  tropa.setApiPrefix('/api/v1')
  tropa.use(cors())
  tropa.use(pino())

  await tropa.loadControllers(path.resolve(__dirname, './controllers'))

  const server = http.createServer(tropa.listener)

  server.listen(3000, () => logger.info('Server started on port 3000'))
}

bootstrap().catch(e => {
  console.error(e)

  process.exit(-1)
})