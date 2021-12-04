export default class Interceptor {
  intercept(ctx, requestHandler) {
    return requestHandler()
  }
}