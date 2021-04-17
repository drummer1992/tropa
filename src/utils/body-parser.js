const parse = str => {
  try {
    return str ? JSON.parse(str) : null
  } catch {
    return null
  }
}

export default async req => {
  const buffer = []

  for await (const chunk of req) {
    buffer.push(chunk)
  }

  return parse(Buffer.concat(buffer).toString())
}