import Keys from '../symbols'

export default (target, property) => {
  target[Keys.kMeta] = target[Keys.kMeta] || {}
  target[Keys.kMeta][property] = target[Keys.kMeta][property] || { arguments: [] }
}