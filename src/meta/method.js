export default class MethodMeta {
  constructor() {
    this.url = null
    this.arguments = []
  }

  addArgument(type, attribute, index) {
    this.arguments[index] = { type, attribute }
  }

  setUrl(urlInstance) {
    this.url = urlInstance
  }

  isSuitable(url, method) {
    return this.url.method === method && this.url.regExp.test(url)
  }
}