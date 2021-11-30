import Controller from './controller'
import Keys from "./symbols";
import http from 'http'
import {promisify} from 'util'

/**
 * @param {ServerOptions} [serverOptions]
 */
export default function tropa(serverOptions) {
  const server = http.createServer(serverOptions, async (req, res) => {
    const controller = await Controller[Keys.kExecute](req, res)

    res.writeHead(controller.response.statusCode, controller.response.headers)
    res.end(controller.response.body)
  })

  server.listen = promisify(server.listen).bind(server)

  return server
}