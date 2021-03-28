#! /usr/bin/env node
const { createFunction } = require('./main')

const createFunctionAndPrintResult = async () => {
  try {
    const { name, path } = await createFunction()

    console.log(`✨ Created ${name} ✨`)
    console.log('')
    console.log(`💾 ${path}`)
    console.log(`🔗 /.netlify/functions/${name}`)
  } catch (error) {
    if (error.code === 'EEXIST') {
      console.log(
        `🙈 Could not create functions directory. Try manually creating a "netlify/functions" directory and running this command again.`,
      )

      return
    }

    console.log(`🙈 Something went wrong: ${error.message}`)
  }
}

createFunctionAndPrintResult()
