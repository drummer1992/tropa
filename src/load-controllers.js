import fs from 'fs/promises'
import path from 'path'
import assert from 'assert'

const getModulesPath = async pathToDir => {
  const dir = await fs.readdir(path.resolve(__dirname, pathToDir))
    .catch(e => {
      if (e.code === 'ENOENT') {
        throw new Error(`folder with controllers does not exist ${pathToDir}`)
      }

      throw e
    })

  return dir.filter(item => item.includes('.js'))
    .map(fileName => path.resolve(__dirname, pathToDir, fileName))
}

const loadModules = modulesPath => Promise.all(modulesPath.map(path => import(path)))

export default async pathToDir => {
  assert(pathToDir, 'path to folder with controllers is required')

  const controllersPaths = await getModulesPath(pathToDir)

  assert(controllersPaths.length, `controllers not found in the folder ${pathToDir}`)

  await loadModules(controllersPaths)

  console.warn('controllers successfully initialized')
}