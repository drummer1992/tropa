import URLParser from '../utils/url'
import bodyParser from '../utils/body-parser'
import Keys from '../symbols'
import * as meta from "./meta"
import { getRouteArguments } from "./meta"

const composeArguments = (request, target, method) => {
  return getRouteArguments(target.constructor, method).map(meta => {
    const data = request[meta.type]

    return meta.attribute ? data?.[meta.attribute] : data
  })
}

export default (httpMethod, path) => {
  // TODO: '/' root path is not working
  const urlParser = new URLParser(path)

  return function (target, method, descriptor) {
    const endpoint = descriptor.value

    meta.addRouteMeta(target.constructor, method, {
      httpMethod,
      regExp: urlParser.getRegExp(),
    })

    descriptor.value = async function () {
      const { request } = this[Keys.kContext]

      const { pathParams, queryParams } = urlParser.parse(request.url)

      request.pathParams = pathParams
      request.queryParams = queryParams
      request.body = await bodyParser(request.raw)

      return endpoint.apply(this, composeArguments(request, target, method))
    }

    return descriptor
  }
}