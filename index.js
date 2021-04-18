const BaseService = require('./lib/service').default
const loadServices = require('./lib/service/load').default
const getRequestListener = require('./lib').default

class Routing {
  constructor(Service, { cors }) {
    if (!Service) {
      throw new Error('App service is not provided')
    }

    this.Service = Service
    this.options = { cors }
  }

  async init(pathToServices) {
    await loadServices(pathToServices)

    return getRequestListener(this.Service, this.options)
  }
}

module.exports = {
  Routing,
  BaseService,
  ...require('./lib/errors'),
  ...require('./lib/codes'),
}