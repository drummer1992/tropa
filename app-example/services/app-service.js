import BaseService from "../../lib/base-service"
import { ErrorHandler } from "./decorators/error-handler"
import { ApiPrefix } from "../../lib/decorators"

@ApiPrefix('/api/v2')
export default class AppService extends BaseService {
  @ErrorHandler
  async execute() {
    return await super.execute()
  }
}