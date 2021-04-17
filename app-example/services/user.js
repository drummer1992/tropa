import { Get, Post, Put, Service, Delete, StatusCode } from '../../decorators'
import { HttpCode as c } from '../..'
import AppService from "./app-service"

@Service('/user')
class User extends AppService {
  @Get()
  getProfile() {
    return {
      name: 'Andrii',
      age : 28,
    }
  }

  @Post()
  @StatusCode(c.CREATED)
  createProfile(data) {
    return data
  }

  @Put('/{userId}')
  updateProfile({ pathParams }) {
    const { userId } = pathParams

    return userId
  }

  @Delete('/{userId}')
  deleteProfile({ pathParams }) {
    const { userId } = pathParams

    return userId
  }
}

export default User