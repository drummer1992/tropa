export const isObject = value => value === Object(value) && !Array.isArray(value)

export const getPrototypeKeys = clazz => Object.getOwnPropertyNames(clazz.prototype)
  .filter(key => key !== 'constructor')