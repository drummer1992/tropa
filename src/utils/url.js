import querystring from 'querystring'
import Keys from '../symbols'

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

const QUERY_PARAMS_STR_REGEXP = '$|\\?.+'
const PATH_PARAM_STR_REGEXP = '([^\\?/]+)'

const compilePattern = (pattern = '') => {
  const syntaxRegExp = /{([^}{]+)}/g

  const params = []

  let analysed, regExpStr = pattern

  while ((analysed = syntaxRegExp.exec(pattern))) {
    const [paramInBrackets, param] = analysed

    params.push(param)

    regExpStr = regExpStr.replace(paramInBrackets, PATH_PARAM_STR_REGEXP)
  }

  return {
    params,
    paramsRegExp: new RegExp(`${regExpStr}(${QUERY_PARAMS_STR_REGEXP})`),
    regExp      : new RegExp(`^${regExpStr}(${QUERY_PARAMS_STR_REGEXP})`),
  }
}

export default class Url {
  constructor(method, pattern = '/') {
    const { params, regExp, paramsRegExp } = compilePattern(pattern)

    this[Keys.kMethod] = method
    this[Keys.kRegExp] = regExp
    this[Keys.kParamsRegExp] = paramsRegExp
    this[Keys.kParams] = params
  }

  get regExp() {
    return this[Keys.kRegExp]
  }

  get method() {
    return this[Keys.kMethod]
  }

  static trim(url = '') {
    const last = url[url.length - 1]

    if (last === '/') {
      return url.slice(0, -1)
    }

    return url
  }

  static isRoot(url) {
    return !url
      || (url === '/')
      || url.startsWith('?')
  }

  parseParams(url) {
    return parsePathParams(url, this[Keys.kParamsRegExp], this[Keys.kParams])
  }

  parseQuery(url) {
    return parseQueryParams(url)
  }
}
