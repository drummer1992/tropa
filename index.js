const BaseService = require('./lib/service').default
const loadServices = require('./lib/service/load').default
const getRequestListener = require('./lib').default

class Routing {
  constructor(Service) {
    if (!Service) {
      throw new Error('App service is not provided')
    }

    this.Service = Service
  }

  async init(pathToServices) {
    await loadServices(pathToServices)

    return getRequestListener(this.Service)
  }
}

module.exports = {
  Routing,
  BaseService,
  ...require('./lib/codes'),
}