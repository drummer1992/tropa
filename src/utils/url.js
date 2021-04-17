import querystring from 'querystring'

export default class Url {
  /**
   *
   * @type {RegExp}
   */
  #regExp = null
  #paramsChecker = /{([^}{]+)}/g

  constructor(pattern) {
    this.pattern = pattern
    this.strForRegExp = pattern
    this.pathParamsMap = {}
    this.#regExp = !pattern && /^$/
  }

  getRegExp() {
    if (this.#regExp) {
      return this.#regExp
    }

    const pathParams = this.#paramsChecker.exec(this.pattern)

    if (!pathParams) {
      return new RegExp(`${this.strForRegExp}(\\?|$)`)
    }

    this.strForRegExp = this.strForRegExp.replace(pathParams[0], '([^\\?/]+)?')

    this.pathParamsMap[pathParams[1]] = null

    return this.getRegExp()
  }

  parsePathParams(url) {
    const regExp = this.getRegExp()

    const parsed = regExp.exec(url)

    if (parsed) {
      const [, ...params] = parsed

      Object.keys(this.pathParamsMap).forEach((param, i) => {
        this.pathParamsMap[param] = params[i]
      })
    }

    return this.pathParamsMap
  }

  parseQueryParams(url) {
    const [, query] = url.split('?')

    return querystring.parse(query)
  }
}
