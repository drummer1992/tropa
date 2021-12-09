import { Readable } from 'stream'
import { instanceOf, isArray, isFunction, isNumber, isObject, isString } from '../utils/predicates'
import { and, not, or } from '../utils/function'

const contentTypeApplicationJson = content => ({
  'Content-Type'  : 'application/json',
  'Content-Length': Buffer.byteLength(content),
})

const contentTypeTextPlain = content => ({
  'Content-Type'  : 'text/plain',
  'Content-Length': Buffer.byteLength(content),
})

const repliers = [
  {
    criteria: instanceOf(Readable),
    reply   : response => {
      response.raw.writeHead(response.statusCode, response.headers)
      response.body.pipe(response.raw)
    },
  },
  {
    criteria: and(
      or(isArray, isObject),
      not(isFunction),
    ),
    reply   : response => {
      const serialized = JSON.stringify(response.body)

      response.raw.writeHead(response.statusCode, {
        ...contentTypeApplicationJson(serialized),
        ...(response.headers),
      })

      response.raw.end(serialized)
    },
  },
  {
    criteria: isString,
    reply   : response => {
      response.raw.writeHead(response.statusCode, {
        ...contentTypeTextPlain(response.body),
        ...(response.headers),
      })

      response.raw.end(response.body)
    },
  },
  {
    criteria: and(isNumber, not(isNaN)),
    reply   : response => {
      const serialized = String(response.body)

      response.raw.writeHead(response.statusCode, {
        ...contentTypeTextPlain(serialized),
        ...(response.headers),
      })

      response.raw.end(serialized)
    },
  },
  {
    criteria: () => true,
    reply   : response => {
      response.raw.writeHead(response.statusCode, response.headers)
      response.raw.end(response.body ? String(response.body) : '')
    },
  },
]

export default response => {
  const replier = repliers.find(replier => replier.criteria(response.body))

  return replier.reply(response)
}