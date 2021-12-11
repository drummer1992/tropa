import { Get, Prefix } from '../../lib'
import * as Stream from 'stream'

const content = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

@Prefix('/serialize')
class SerializeController {
  @Get('/stream')
  getStream() {
    return Stream.Readable.from(content)
  }

  @Get('/json')
  getJSON() {
    return content
  }

  @Get('/string')
  getString() {
    return JSON.stringify(content)
  }

  @Get('/number')
  getNumber() {
    return content.length
  }

  @Get('/zero')
  getZero() {
    return 0
  }

  @Get('/nan')
  getNaN() {
    return NaN
  }

  @Get('/null')
  getNull() {
    return null
  }

  @Get('/undefined')
  getUndefined() {
    return undefined
  }

  @Get('/function')
  getFunction() {
    return () => {
    }
  }
}