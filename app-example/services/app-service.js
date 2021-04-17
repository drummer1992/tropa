import { ApiPrefix } from "../../decorators"
import { BaseService } from "../../"
import { ErrorHandler } from "./decorators/error-handler"

@ApiPrefix('/api/v2')
export default class AppService extends BaseService {
  @ErrorHandler
  async execute() {
    return await super.execute()
  }
}