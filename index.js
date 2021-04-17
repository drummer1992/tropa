module.exports = {
  initRouting : require('./lib').default,
  initServices: require('./lib/init-services').default,
  BaseService : require('./lib/base-service').default,
  ...require('./lib/codes'),
  ...require('./lib/decorators'),
}