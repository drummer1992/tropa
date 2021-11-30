import querystring from 'querystring'

const DEFAULT_URL_REGEXP = /^($|\?.+)/

const parsePathParams = (url, regExp, paramsKeys) => {
  const parsed = regExp.exec(url)

  const pathParams = {}

  if (parsed) {
    const [, ...parsedParams] = parsed

    paramsKeys.forEach((param, i) => {
      pathParams[param] = parsedParams[i]
    })
  }

  return pathParams
}

const parseQueryParams = url => {
  const [, query] = url.split('?')

  return querystring.parse(query)
}

export default class URLParser {
  #regExp = null
  #paramsKeys = []

  constructor(pattern) {
    const PATH_PARAMS_REGEXP = /{([^}{]+)}/g

    let analysed
    let regExpStr = pattern

    while (analysed = PATH_PARAMS_REGEXP.exec(pattern)) {
      const [paramInBrackets, param] = analysed

      this.#paramsKeys.push(param)

      regExpStr = regExpStr.replace(paramInBrackets, '([^\\?/]+)?')
    }

    this.#regExp = regExpStr ? new RegExp(`${regExpStr}(\\?|$)`) : DEFAULT_URL_REGEXP
  }

  getRegExp() {
    return this.#regExp
  }

  parse(url) {
    return {
      pathParams: parsePathParams(url, this.#regExp, this.#paramsKeys),
      queryParams: parseQueryParams(url),
    }
  }
}
