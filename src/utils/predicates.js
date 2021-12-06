export const isObject = value => value === Object(value) && !Array.isArray(value)
export const isArray = value => Array.isArray(value)
export const isFunction = value => typeof value === 'function'
export const instanceOf = clazz => value => value instanceof clazz
export const isString = value => typeof value === 'string'
export const isNumber = value => typeof value === 'number'