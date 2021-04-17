import { Get, Post, Service } from '../../decorators'
import AppService from "./app-service"

@Service('/')
class Root extends AppService {
  @Get('/')
  getHelloWorld() {
    return { message: 'Hello World' }
  }

  @Post('/')
  postHelloWorld(params) {
    return params
  }
}

export default Root