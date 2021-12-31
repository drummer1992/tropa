import { isFunction } from '../utils/predicates'
import assert from 'assert'

const middlewares = []

export const use = middleware => {
  assert(isFunction(middleware), 'middleware should be a function')

  middlewares.push(middleware)
}

export const runMiddlewares = (req, res, next) => {
  const run = idx => {
    if (idx === middlewares.length) {
      return next()
    }

    const middleware = middlewares[idx]

    middleware(req, res, err => {
      if (err) {
        return next(err)
      }

      run(idx + 1)
    })
  }

  run(0)
}