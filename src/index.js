import * as meta from './meta'
import listener from './listener'
import loadControllers from './load-controllers'

const tropa = {
  listener,
  loadControllers,
  setApiPrefix: meta.setApiPrefix,
  useHooks    : meta.setHooks,
}

export default tropa