const express = require('express')
const app = express()
const morgan = require('morgan')
const helmet = require("helmet");

//init middlewares
// app.use(morgan('dev'))
app.use(morgan('combined'))
// app.use(morgan('common'))
// app.use(morgan('short'))
// app.use(morgan('tiny'))
app.use(helmet())
//init db

//init routes

app.get('/', (req, res, next) => {
  return res.status(500).json({
    message: 'Welcome Jin dev!'
  })
})

//handling error

module.exports = app

