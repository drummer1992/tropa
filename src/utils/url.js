import querystring from 'querystring'

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

  const paramsList = []

  let analysed, regExpStr = pattern

  while ((analysed = syntaxRegExp.exec(pattern))) {
    const [paramInBrackets, param] = analysed

    paramsList.push(param)

    regExpStr = regExpStr.replace(paramInBrackets, PATH_PARAM_STR_REGEXP)
  }

  const paramsRegExp = new RegExp(`${regExpStr}(${QUERY_PARAMS_STR_REGEXP})`)
  const regExp = new RegExp(`^${paramsRegExp.source}`)

  return { regExp, paramsRegExp, paramsList }
}

export default class Url {
  constructor(method, pattern = '/') {
    const { paramsList, regExp, paramsRegExp } = compilePattern(pattern)

    this.method = method
    this.regExp = regExp
    this.paramsRegExp = paramsRegExp
    this.paramsList = paramsList
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
    return parsePathParams(url, this.paramsRegExp, this.paramsList)
  }

  parseQuery(url) {
    return parseQueryParams(url)
  }
}
