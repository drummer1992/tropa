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
const PATH_PARAM_STR_REGEXP = '([^\\?/]+)?'
const ROOT_REGEXP = new RegExp(`^(${QUERY_PARAMS_STR_REGEXP})`)

const compilePattern = pattern => {
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
    regExp: regExpStr
      ? new RegExp(`${regExpStr}(${QUERY_PARAMS_STR_REGEXP})`)
      : ROOT_REGEXP,
  }
}

const trimIfRoot = pattern => Url.isRoot(pattern)
  ? Url.trim(pattern)
  : pattern

export default class Url {
  constructor(method, pattern = '') {
    const trimmed = trimIfRoot(pattern)
    const compiled = compilePattern(trimmed)

    this[Keys.kMethod] = method
    this[Keys.kRegExp] = compiled.regExp
    this[Keys.kParams] = compiled.params
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
    return !url || (url === '/')
  }

  parseParams(url) {
    return parsePathParams(url, this.regExp, this[Keys.kParams])
  }

  parseQuery(url) {
    return parseQueryParams(url)
  }
}
