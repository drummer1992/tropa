import { App } from './constants'
import Hooks from '../hooks'

export const appMeta = new Map([
  [App.PREFIX, ''],
  [App.HOOKS, new Hooks()],
])

export const controllersMeta = new Map()