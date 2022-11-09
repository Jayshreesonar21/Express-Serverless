var createError = require('http-errors')
const serverless = require('serverless-http')
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./team.routes'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  if (err.name === 'ValidationError') {
    return res.status(422).json(err)
  }
  return res.status(500).json(err)
})

module.exports.team = serverless(app)
