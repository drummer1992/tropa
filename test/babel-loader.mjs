import { createRequire } from 'node:module'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { resolve as resolvePath, dirname, extname } from 'node:path'

const require = createRequire(import.meta.url)
const { transformSync } = require('@babel/core')

const BABEL_OPTIONS = {
  configFile: false,
  presets   : [
    ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
    '@babel/preset-typescript',
  ],
  plugins   : [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    'babel-plugin-parameter-decorator',
  ],
}

const EXTS = ['.js', '.ts']

function tryResolve(base) {
  for (const ext of EXTS) {
    const p = base + ext

    if (existsSync(p)) return p
  }

  for (const ext of EXTS) {
    const p = resolvePath(base, 'index' + ext)

    if (existsSync(p)) return p
  }

  return null
}

export function resolve(specifier, context, nextResolve) {
  const { parentURL } = context

  if (
    specifier.startsWith('.')
    && parentURL?.startsWith('file://')
    && !parentURL.includes('/node_modules/')
    && !extname(specifier)
  ) {
    const base = resolvePath(dirname(fileURLToPath(parentURL)), specifier)
    const resolved = tryResolve(base)

    if (resolved) {
      return { url: pathToFileURL(resolved).href, shortCircuit: true }
    }
  }

  return nextResolve(specifier, context)
}

export function load(url, context, nextLoad) {
  const isTs = url.endsWith('.ts')
  const isProjectJs = url.endsWith('.js') && !url.includes('/node_modules/')

  if (isTs || isProjectJs) {
    const filename = fileURLToPath(url)
    const code = readFileSync(filename, 'utf-8')
    const { code: source } = transformSync(code, { ...BABEL_OPTIONS, filename })

    return { format: 'module', source, shortCircuit: true }
  }

  return nextLoad(url, context)
}
