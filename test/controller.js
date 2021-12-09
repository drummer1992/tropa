'use strict'

import ControllerMeta from '../src/meta/controller'
import * as meta from '../src/meta'
import { controllersMeta } from '../src/meta/storage'
import * as tropa from '../src'
import { Prefix } from '../src'
import { notFoundRoute } from '../src/meta/route'

const initRoute = (method, path, prefix = '') => {
  const HttpMethod = tropa[method]

  new ControllerMeta(
    @Prefix(prefix)
    class {
      @HttpMethod(path)
      getFoo() {
      }
    },
  )
}

const findRoute = (url, method) => {
  const route = meta.findRoute(url, method)

  return route === notFoundRoute ? undefined : route
}

describe('controller', () => {
  beforeEach(() => {
    tropa.setApiPrefix('')
    controllersMeta.clear()
  })

  describe('findRoute', () => {
    it('root', () => {
      initRoute('Get', '/')

      assert(findRoute('/', 'GET'))
      assert(findRoute('/?foo=bar', 'GET'))
      assert(!findRoute('/foo', 'GET'))
      assert(!findRoute('/0', 'GET'))
      assert(!findRoute('/0/', 'GET'))
      assert(!findRoute('/', 'POST'))
      assert(!findRoute('', 'POST'))
    })

    it('route user', () => {
      initRoute('Get', '/user')

      assert(findRoute('/user', 'GET'))
      assert(findRoute('/user/', 'GET'))
      assert(findRoute('/user?foo=bar', 'GET'))
      assert(!findRoute('/user/foo', 'GET'))
      assert(!findRoute('/user/0', 'GET'))
      assert(!findRoute('/user/0/', 'GET'))
      assert(!findRoute('/user', 'POST'))
    })

    it('path params', () => {
      initRoute('Get', '/{id}')

      assert(findRoute('/1', 'GET'))
      assert(findRoute('/1?foo=bar', 'GET'))
      assert(findRoute('/1/', 'GET'))
      assert(!findRoute('/', 'GET'))
      assert(!findRoute('/1/foo', 'GET'))
      assert(!findRoute('/1/0', 'GET'))
      assert(!findRoute('/1/0/', 'GET'))
      assert(!findRoute('/1', 'POST'))

      controllersMeta.clear()

      initRoute('Get', '/user/{userId}/orders/{orderId}')

      assert(!findRoute('/user', 'GET'))
      assert(!findRoute('/user/1', 'GET'))
      assert(!findRoute('/user/1/orders', 'GET'))
      assert(!findRoute('/user/1/orders/', 'GET'))

      assert(findRoute('/user/1/orders/1', 'GET'))
      assert(findRoute('/user/1/orders/1?foo=bar', 'GET'))
      assert(findRoute('/user/1/orders/1/', 'GET'))

      assert(!findRoute('/user/1/orders/1', 'PUT'))
    })

    it('with prefix', () => {
      initRoute('Get', '/', '/order')

      assert(findRoute('/order', 'GET'))
      assert(findRoute('/order/', 'GET'))
      assert(findRoute('/order?foo=bar', 'GET'))
      assert(!findRoute('/order/foo', 'GET'))
      assert(!findRoute('/order/0', 'GET'))
      assert(!findRoute('/order/0/', 'GET'))
      assert(!findRoute('/order', 'POST'))
    })

    it('with api prefix', () => {
      tropa.setApiPrefix('/api/v1')
      initRoute('Get', '/', '/')

      assert(!findRoute('/', 'GET'))
      assert(!findRoute('/foo=bar', 'GET'))
      assert(!findRoute('/foo', 'GET'))
      assert(!findRoute('/foo/v1', 'GET'))
      assert(!findRoute('/api/v2', 'GET'))
      assert(!findRoute('/api/v12', 'GET'))

      assert(findRoute('/api/v1', 'GET'))
      assert(findRoute('/api/v1/', 'GET'))
      assert(findRoute('/api/v1?foo=bar', 'GET'))

      assert(!findRoute('/api/v1/foo', 'GET'))

      controllersMeta.clear()

      initRoute('Get', '/{id}', '/user')

      assert(!findRoute('/api/v1', 'GET'))
      assert(!findRoute('/api/v1/', 'GET'))
      assert(!findRoute('/api/v1/user', 'GET'))
      assert(!findRoute('/api/v1/user/', 'GET'))
      assert(!findRoute('/api/v1/user/1/1', 'GET'))

      assert(findRoute('/api/v1/user/1', 'GET'))
      assert(findRoute('/api/v1/user/1/', 'GET'))
      assert(findRoute('/api/v1/user/1?foo=bar', 'GET'))

      controllersMeta.clear()

      initRoute('Get', '/{userId}/orders/{orderId}', '/user')

      assert(!findRoute('/api/v1/user/1', 'GET'))
      assert(!findRoute('/api/v1/user/1/orders', 'GET'))
      assert(!findRoute('/api/v1/user/1/orders/', 'GET'))

      assert(findRoute('/api/v1/user/1/orders/1', 'GET'))
      assert(findRoute('/api/v1/user/1/orders/1/', 'GET'))
      assert(findRoute('/api/v1/user/1/orders/1?foo=bar', 'GET'))
    })
  })
})