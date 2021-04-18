import { HttpCode as c } from '../../codes'

export const withCors = fn => (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')

  if (req.method === 'OPTIONS') {
    res.statusCode = c.NO_CONTENT

    return res.end()
  }

  return fn(req, res)
}