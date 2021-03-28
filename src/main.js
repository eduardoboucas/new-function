const { copyFile } = require('fs')
const { basename, extname, resolve } = require('path')
const { promisify } = require('util')

const pCopyFile = promisify(copyFile)

const { ensureDirectory, findAvailableFilename } = require('./utils/filesystem')

const createFunction = async function () {
  const srcPath = resolve(__dirname, 'templates/javascript_function.js')
  const destDirectory = await ensureDirectory('netlify/functions')
  const destPath = await findAvailableFilename({ directory: destDirectory, name: 'my-function-@.js' })
  const functionName = basename(destPath, extname(destPath))

  await pCopyFile(srcPath, destPath)

  return {
    name: functionName,
    path: destPath,
  }
}

module.exports = { createFunction }
