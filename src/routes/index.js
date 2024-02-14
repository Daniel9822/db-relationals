const route = require('express').Router()
const fs = require('fs')

const path = __dirname

const removeExtent = (filename) => {
  return filename.split('.').shift()
}

fs.readdirSync(path).filter(filename => {
  const name = removeExtent(filename)

  if(name !== 'index') {
    route.use(`/${name}`, require(`./${filename}`))
  }
})

module.exports = route