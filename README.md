# Tropa

Tropa is a routing library for a Node.js applications, built using awesome [Babel](https://github.com/babel/babel) compiler.

# Attention!
The `Tropa` is in the development stage, but no one is holding you back from trying it right now. 

# Example
 
```js
import * as tropa from 'tropa';
import { Get } from 'tropa';
import http from 'http'

class Root {
  @Get('/')
  hello() {
    return { Hello: 'World' }
  }
}

http.createServer(tropa.listener).listen(3000, () => {
  console.log('Server started on port 3000')
})
```