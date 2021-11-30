import fs from 'fs/promises'
import path from 'path'
import { InternalError } from './errors'

const getJsFilesInDir = async pathToDir => {
  const dir = await fs.readdir(path.resolve(__dirname, pathToDir))

  return dir.filter(item => item.includes('.js'))
    .map(fileName => path.resolve(__dirname, pathToDir, fileName))
}

const loadModules = modules => Promise.all(modules.map(path => import(path)))

export default async function loadControllers(pathToDir) {
  const controllerPath = await getJsFilesInDir(pathToDir)

  const controllers = await loadModules(controllerPath)

  controllers.forEach((Controller, i) => {
    if (!Controller.default?.name) {
      throw new InternalError(`Default export not found for module: ${controllerPath[i]}`)
    }

    console.log(`${Controller.default.name} controller successfully initialized`)
  })
}