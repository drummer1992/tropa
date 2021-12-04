import * as meta from './meta'
import requestListener from './listener'
import loadControllers from './load-controllers'
import util from 'util'
import http from 'http'

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

  const server = http.createServer(serverOptions, requestListener)

  const listen = util.promisify(server.listen)

  server.listen = async function () {
    tropaOptions.apiPrefix && meta.setApiPrefix(tropaOptions.apiPrefix)
    tropaOptions.controllers && await loadControllers(tropaOptions.controllers)

    return listen.apply(server, arguments)
  }

  return server
}