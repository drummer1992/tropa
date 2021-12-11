import { App } from './constants'
import TropaHooks from '../hooks'

export const appMeta = new Map([
  [App.PREFIX, ''],
  [App.HOOKS, new TropaHooks()],
])

export const controllersMeta = new Map()