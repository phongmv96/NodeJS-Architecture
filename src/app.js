const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require("helmet");
const compression = require('compression')
//init middlewares
// app.use(morgan('dev'))
app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))
app.use(helmet())
app.use(compression())
//init db

//init routes

app.get('/', (req, res, next) => {
  const strCompression = 'Hello Phong'
  return res.status(500).json({
    message: 'Welcome Jin dev!',
    metadata: strCompression.repeat(10000)
  })
})

//handling error

module.exports = app

