import { getContext } from '../lib'

const logger = {
  info : (...args) => getContext().request.raw.log.info(...args),
  error: (...args) => getContext().request.raw.log.error(...args),
}

export default logger