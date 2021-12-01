import { addEndpoint } from '../controller/___private___'
import initMeta from './init-meta'
import URLParser from '../utils/url'
import bodyParser from '../utils/body-parser'
import Keys from '../symbols'

const getArguments = (instance, target, property) => {
  target[Keys.kMeta][property].arguments.map(meta => {
    const data = instance.request[meta.type]

    return meta.attribute ? data?.[meta.attribute] : data
  })
}

export default (httpMethod, path) => {
  // TODO: '/' root path is not working
  const urlParser = new URLParser(path)

  return function (target, property, descriptor) {
    initMeta(target, property)

    const endpoint = descriptor.value

    addEndpoint(target.constructor, {
      httpMethod,
      name: property,
      regExp: urlParser.getRegExp(),
    })

    descriptor.value = async function () {
      const { pathParams, queryParams } = urlParser.parse(this.request.url)

      this.request.pathParams = pathParams
      this.request.queryParams = queryParams
      this.request.body = await bodyParser(this.request.raw)

      const args = getArguments(this, target, property)

      return endpoint.apply(this, args)
    }

    return descriptor
  }
}