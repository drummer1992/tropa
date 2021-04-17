import fs from 'fs/promises'
import path from 'path'
import { InternalError } from '../errors'

const getJsFilesInDir = async pathToDir => {
  const dir = await fs.readdir(path.resolve(__dirname, pathToDir))

  return dir.filter(item => item.includes('.js'))
    .map(fileName => path.resolve(__dirname, pathToDir, fileName))
}

const loadModules = modules => Promise.all(modules.map(path => import(path)))

export default async pathToDir => {
  const servicesPath = await getJsFilesInDir(pathToDir)

  const services = await loadModules(servicesPath)

  services.forEach((Service, i) => {
    if (!Service.default?.name) {
      throw new InternalError(`Default export not found for module: ${servicesPath[i]}`)
    }

    console.log(`${Service.default.name} service successfully initialized`)
  })
}