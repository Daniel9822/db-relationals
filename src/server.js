const express = require('express')
const morgan = require('morgan')

const server = express()

server.use(express.static('public'))
server.use(morgan('dev'))
server.use(express.json())

server.use('/api', require('./routes'))

server.use('/', (req, res) => {
  res.sendFile('index.html', (err) => {
    if (err) {
      res.status(400).send('algo salio mal')
    }
  })
})

server.use('*', (req, res) => {
  res.status(404).send({
    error: false,
    message: 'Not found'
  })
})

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message
  })
})

module.exports = server
