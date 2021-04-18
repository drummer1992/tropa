const BaseService = require('./lib/service').default
const loadServices = require('./lib/service/load').default
const getRequestListener = require('./lib').default

class Routing {
  constructor({ Service, corsEnabled }) {
    this.Service = Service
    this.corsEnabled = corsEnabled
  }

  async init(pathToServices) {
    await loadServices(pathToServices)

    return getRequestListener({
      Service    : this.Service,
      corsEnabled: this.corsEnabled,
    })
  }
}

module.exports = {
  Routing,
  BaseService,
  ...require('./lib/errors'),
  ...require('./lib/codes'),
}