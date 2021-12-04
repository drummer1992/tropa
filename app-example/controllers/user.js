import {
  Get,
  Post,
  Put,
  Patch,
  Prefix,
  Delete,
  Code,
  Query,
  Param,
  Body,
  Request,
  Response,
  Headers,
} from '../../src/common'
import { HttpCode as c } from '../../src/codes'

@Prefix('/user')
export default class UserController {
  @Get()
  getProfile(@Query() query) {
    throw new Error('oops')
  }

  @Get('/{id}/test')
  getProfileById(@Request() req, @Response() res) {
    res.end(JSON.stringify({ foo: 'bar' }))
  }

  @Code(c.CREATED)
  @Post('/{profile}/profile')
  createProfile(@Body() body, @Param() param, @Query() query) {
    return { body, param, query }
  }

  @Headers({ 'Content-Type': 'text/plain' })
  @Put('/{userId}')
  updateProfile(@Param() params) {
    const { userId } = params

    return userId
  }

  @Patch('/{userId}')
  patchProfile(@Param() params) {
    const { userId } = params

    return userId
  }

  @Delete('/{userId}')
  deleteProfile(@Param() params) {
    const { userId } = params

    return userId
  }
}