import BaseService from "../../lib/base-service"
import { ErrorHandler } from "./decorators/error-handler"

export default class AppService extends BaseService {
  @ErrorHandler
  async execute() {
    return await super.execute()
  }
}