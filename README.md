# tropa

Tropa is a routing library for a Node.js applications, built using awesome [Babel](https://github.com/babel/babel) compiler.

# Init App

You can easily create your `tropa` app using [create-tropa](https://www.npmjs.com/package/create-tropa) generator:

```shell
npm init tropa my-app
```

## How roting looks like

```js
import { Get, listener } from 'tropa';
import http from 'http'

class Root {
  @Get('/')
  hello() {
    return { Hello: 'World' }
  }
}

http.createServer(listener).listen(3000, () => {
  console.log('Server started on port 3000')
})
```

# Attention!
The `tropa` is in the development stage, but no one is holding you back from trying it right now.
