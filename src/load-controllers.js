import fs from 'fs/promises'
import path from 'path'

const getModulesPath = async pathToDir => {
  const dir = await fs.readdir(path.resolve(__dirname, pathToDir))

  return dir.filter(item => item.includes('.js'))
    .map(fileName => path.resolve(__dirname, pathToDir, fileName))
}

const loadModules = modulesPath => Promise.all(modulesPath.map(path => import(path)))

export default async function loadControllers(pathToDir) {
  const modulesPath = await getModulesPath(pathToDir)
  const controllers = await loadModules(modulesPath)

  controllers.forEach((Controller, i) => {
    if (!Controller.default?.name) {
      throw new Error(`Default export not found for module: ${modulesPath[i]}`)
    }

    console.log(`${Controller.default.name} controller successfully initialized`)
  })
}