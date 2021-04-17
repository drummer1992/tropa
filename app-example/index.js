import http from 'http'
import path from 'path'
import AppService from "./services/app-service"
import initServices from "../lib/init-services"
import initRouting from '../'

const PORT = 3000

async function init() {
  await initServices(path.resolve(__filename, '../services'))

  http.createServer(initRouting(AppService)).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
}

init().catch(e => {
  console.error(e.stack)

  process.exit(-1)
})