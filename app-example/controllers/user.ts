import { object, string, number } from 'sito'
import { ApiError } from '../errors'
import {
  Get,
  Post,
  Put,
  Patch,
  Prefix,
  Delete,
  StatusCode,
  Param,
  Body,
  Response,
  Headers,
  Context,
  Decorate,
  HttpCode as c,
  getContext,
} from '../../lib'
import logger from '../logger'
import { TropaResponse } from "../../types";

let users = []

const auth = fn => (...args) => {
  const { token } = getContext().request.headers

  if (token !== 'tropa') {
    throw new ApiError('Authorization failed', 401)
  }

  return fn(...args)
}

const classLogger = fn => (...args) => {
  logger.info('class logger')

  return fn(...args)
}

const methodLogger = fn => (...args) => {
  logger.info('method logger')

  return fn(...args)
}

const validate = (validationSchema, options = {}) => async payload => {
  await validationSchema.assert(payload, options)

  return payload
}

@Decorate(auth, classLogger)
@Prefix('/user')
export default class UserController {
  @Decorate(methodLogger)
  @Get('/')
  getProfiles() {
    return users
  }

  @Get('/{userId}/profile/{profileId}')
  getProfileById(@Response() res: TropaResponse, @Param('userId') userId: string, @Param('profileId') profileId: string) {
    const user = users.find(user => user.id === userId && user.profile?.id === profileId)

    res.raw.setHeader('Content-Type', 'application/json')
    res.raw.end(JSON.stringify(user ? user : { message: 'User not found' }))
  }

  @Headers({ 'Content-Type': 'text/plain' })
  @StatusCode(c.CREATED)
  @Post()
  createProfile(
    @Body(validate(
      object({
        name   : string().required(),
        age    : number().required(),
        profile: object({
          id: number().required(),
        }).strict().required(),
      }).strict().required(),
    )) body?: object,
  ) {
    const id = Math.floor(Math.random() * 1e6).toString()

    users.push({ id, ...(body) })

    return id
  }

  @Put('/{id}')
  updateProfile(@Param() {id}, @Body() changes?: object) {
    if (!id) throw new ApiError('id is required', 400)
    if (!changes) throw new ApiError('changes are required', 400)

    const user = users.find(user => user.id === id)

    if (!user) throw new ApiError('User not found', 404)

    Object.assign(user, changes)
  }

  @Patch('/{id}')
  patchProfile() {
    throw new Error('not implemented')
  }

  @Delete('/{id}')
  deleteProfile(@Param('id') id: string) {
    if (!id) throw new ApiError('id is required', 400)

    users = users.filter(user => user.id !== id)
  }

  @Get('/ctx')
  getCtx(@Context() ctx: object) {
    return ctx
  }
}