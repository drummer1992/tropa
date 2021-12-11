const parse = content => {
  try {
    return content ? JSON.parse(content) : null
  } catch {
    return content
  }
}

export default async req => {
  const buffer = []

  for await (const chunk of req) {
    buffer.push(chunk)
  }

  return parse(Buffer.concat(buffer).toString())
}