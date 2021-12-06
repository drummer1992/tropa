export const getPrototypeKeys = clazz => Object.getOwnPropertyNames(clazz.prototype)
  .filter(key => key !== 'constructor')