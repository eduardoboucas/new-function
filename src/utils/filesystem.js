const { mkdir, stat } = require('fs')
const { resolve } = require('path')
const { cwd } = require('process')
const { promisify } = require('util')

const pMkdir = promisify(mkdir)
const pStat = promisify(stat)

const ensureDirectory = async (path) => {
  const fullPath = resolve(cwd(), path)

  await pMkdir(fullPath, { recursive: true })

  return path
}

const findAvailableFilename = async ({ directory, index = 1, name }) => {
  const fullPath = resolve(directory, name.replace('@', index))

  try {
    await pStat(fullPath)

    return findAvailableFilename({ directory, index: index + 1, name })
  } catch (_) {
    return fullPath
  }
}

module.exports = { ensureDirectory, findAvailableFilename }
