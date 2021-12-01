import Controller from './controller'
import Keys from './symbols'
import http from 'http'
import { promisify } from 'util'
import { setApiPrefix } from './controller/___private___'
import loadControllers from './load-controllers'

/**
 * @param {Object} [options]
 * @param {ServerOptions} [options.serverOptions]
 * @param {Object} [options.tropaOptions]
 * @param {String} [options.tropaOptions.apiPrefix]
 * @param {String} [options.tropaOptions.controllers]
 * @returns {Server}
 */
export default function tropa(options = {}) {
  const { serverOptions = {}, tropaOptions = {} } = options

  const requestListener = (req, res) => Controller[Keys.kExecute](req, res)

  const server = http.createServer(serverOptions, requestListener)

  const listen = promisify(server.listen)

  server.listen = async function () {
    tropaOptions.apiPrefix && setApiPrefix(tropaOptions.apiPrefix)
    tropaOptions.controllers && await loadControllers(tropaOptions.controllers)

    return listen.apply(server, arguments)
  }

  return server
}