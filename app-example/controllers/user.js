import { ApiError } from '../errors'
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
  Interceptor,
  Context,
  HttpCode as c,
} from '../../lib'

let users = []

const loggerInterceptor = (ctx, call) => {
  console.log('user class interceptor', 'handler', call.name)

  return call()
}

const authInterceptor = (ctx, call) => {
  const { token } = ctx.request.headers

  if (token !== 'tropa') {
    throw new ApiError('Authorization failed')
  }

  return call()
}

@Prefix('/user')
@Interceptor(loggerInterceptor)
export default class UserController {
  @Get('/')
  getProfiles() {
    return users
  }

  @Get('/{userId}/profile/{profileId}')
  getProfileById(@Response() res, @Param('userId') userId, @Param('profileId') profileId) {
    const user = users.find(user => user.id === userId && user.profile?.id === profileId)

    res.raw.setHeader('Content-Type', 'application/json')
    res.raw.end(JSON.stringify(user ? user : { message: 'User not found' }))
  }

  @Interceptor(authInterceptor)
  @Headers({ 'Content-Type': 'text/plain' })
  @Code(c.CREATED)
  @Post()
  createProfile(@Body() body) {
    const id = Math.floor(Math.random() * 1e6).toString()

    users.push({ id, ...(body) })

    return id
  }

  @Put('/{id}')
  updateProfile(@Param() { id }, @Body() changes) {
    if (!id) throw new ApiError('id is required')
    if (!changes) throw new ApiError('changes are required')

    const user = users.find(user => user.id === id)

    if (!user) throw new ApiError('User not found')

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

  @Get('/ctx')
  getCtx(@Context() ctx) {
    return ctx
  }
}