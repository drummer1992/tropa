export const and = (...predicates) => (...args) => predicates.every(predicate => predicate(...args))
export const or = (...predicates) => (...args) => predicates.some(predicate => predicate(...args))
export const not = fn => value => !fn(value)
export const identity = x => x