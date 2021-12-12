# tropa

Tropa is a simple decorators based routing library for a Node.js applications, built using
awesome [Babel](https://github.com/babel/babel) compiler.

# Init App

You can easily create your `tropa` app using [create-tropa](https://www.npmjs.com/package/create-tropa) generator:

```shell
npm init tropa my-app
```

# Usage

Here is an example of `Hello World` app.

```js
import { Get, listener } from 'tropa'
import http from 'http'

class Root {
  @Get('/') 
  hello() {
    return { Hello: 'World' }
  }
}

http.createServer(listener).listen(3000)
```

## Routing decorators

```js
import {
  Get,
  Post,
  Patch,
  Put,
  Delete,
} from 'tropa'
```

You are able to define your route handler by attaching one of the decorators mentioned above over your class method.

Route prefix can be added using `Prefix` decorator.

```js
import { Prefix, Get } from 'tropa'

@Prefix('/meta') 
class Meta {
  @Get('/dictionaries') 
  getDictionaties() {
    return {
      foo: 'bar',
      baz: 42,
    }
  }
}
```

Api prefix can be added using `setApiPrefix` method.

```js
import * as tropa from 'tropa'
import http from 'http'

tropa.setApiPrefix('/api/v1')

http.createServer(tropa.listener).listen(3000)
```

## Head decorators

It is possible to defined default headers and default status code for particular route.

```js
import { Post, Headers, StatusCode, Prefix, Body } from 'tropa'

@Prefix('/user')
class User {
  @StatusCode(201)
  @Headers({ 'Content-Type': 'text/plain' })
  @Post('/') 
  create(@Body() body) {
    return User.create(body)
  }
}
```

## Parameter decorators

Parameter decorators provide an opportunity to parse and get
`query` or `path` params or `body` only when it's needed.

It means that the `body` for example will be parsed only if `Body` decorator was set.

```js
import { Post, Body, Param, Query } from 'tropa'

class Root {
  @Post('/{dynamicParam}') 
  echo(@Body() body, @Query() query, @Param() params) {
    return { body, query, params }
  }
}
```

All these decorators take `path` and `map` function.

```js
class Root {
  @Post() 
  echo(@Body('name', doSomethingWithName) name) {
    return { name }
  }
}
```

It is possible to use only `map` function.

```js
class Root {
  @Post() 
  echo(@Body(doSomethingWithBody) body) {
    return body
  }
}
```

There is an ability to get context entities using parameter decorators.

```js
import { Request, Response, Context } from 'tropa'

class User {
  @Get('/') 
  hello(@Context() ctx, @Request() req, @Response() res) {
    res.raw.end(JSON.stringify({ Hello: 'World' }))
  }
}
```

Please note that if you retrieve `res.raw` field (instance of `ServerResponse`), `tropa` hand-overs responsibility of the
response to you!

## Class decoration and methods decoration

`Decorate` decorator accepts list of decorators to apply them to particular method or all class methods. (decorator
defined over class)

```js
import { Get, Decorate } from 'tropa'

const auth = fn => (...args) => {
  const { token } = getContext().request.headers

  if (token !== 'tropa') {
    throw new ApiError('Authorization failed')
  }

  return fn(...args)
}

@Decorate(auth)
class User {
  @Get() 
  hello() {
    return { Hello: 'World' }
  }
}
```

## Hooks

Using hooks you are able to do something during the request life cycle.

All you need is to create `TropaHooks` and apply them using `setHooks` method.

```js
import { TropaHooks, setHooks } from 'tropa'

class Hooks extends TropaHooks {
  onRequest(ctx) {
  }

  beforeParsing(ctx) {
  }

  beforeHandler(ctx) {
  }

  onResponse(ctx) {
  }

  errorHandler(err, ctx) {
  }
}

setHooks(Hooks)
```

Please note that in case you set `errorHandler` you also need to handle `NotFoundError` and `InternalServerError`
by yourself.

Those error classes are exported too.

```js
import { NotFoundError, InternalServerError } from 'tropa'
```

## Current context

You are able to get current context using `getContext` method.

```js
import { getContext } from 'tropa'

const ctx = getContext()
```

## Controllers loading

Controllers can be loaded using `loadControllers` method.
Provide absolute path to directory with controllers to load them.

```js
import * as tropa from 'tropa'
import path from 'path'
import http from 'http'

async function bootstrap() {
  await tropa.loadControllers(path.resolve(__dirname, './controllers'))

  http.createServer(tropa.listener).listen(3000)
}

bootstrap()
```