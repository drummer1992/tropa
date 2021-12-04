# Tropa

Tropa is a routing library for a Node.js applications, built using awesome [Babel](https://github.com/babel/babel) compiler.

# Attention!
The `Tropa` is in the development stage, but no one is holding you back from trying it right now. 

```js
import {
  Get,
  Post,
  Put,
  Patch,
  Prefix,
  Delete,
  Code,
  Param,
  Body,
  Response,
  Headers,
} from '../../src/common'
import { HttpCode as c } from '../../src/codes'
import { randomCode } from '../../src/utils/random'
import { ApiError } from '../errors'

let users = []

@Prefix('/user')
export default class User {
  @Get()
  getProfiles() {
    return users
  }

  @Get('/{id}')
  getProfileById(@Response() res, @Param('id') id) {
    const user = users.find(user => user.id === id)

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(user ? user : { message: 'User not found' }))
  }

  @Headers({ 'Content-Type': 'text/plain' })
  @Code(c.CREATED)
  @Post()
  createProfile(@Body() body) {
    const id = randomCode(36)

    users.push({ id, ...(body) })

    return id
  }

  @Put('/{id}')
  updateProfile(@Param() { id }, @Body() changes) {
    if (!id) throw new ApiError('id is required')
    if (!changes) throw new ApiError('changes are required')

    const user = users.find(user => user.id === id)

    if (!user) throw new ApiError('user not found')

    Object.assign(user, changes)
  }

  @Patch('/{id}')
  patchProfile() {
    throw new Error('not implemented')
  }

  @Delete('/{id}')
  deleteProfile(@Param('id') id) {
    if (!id) throw new ApiError('id is required')

    users = users.filter(user => user.id !== id)
  }
}
```