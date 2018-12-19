// Requiring dependencies
var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// Requiring routers
var indexRouter = require('./routes/index')
var apiRouter = require('./routes/api')

// Creating app
var app = express()

// Setting-up Handlebars as view engine (rendering engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// Middleware declarations
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Declaring the use of wanted routes and attached routers
app.use('/', indexRouter)
app.use('/api', apiRouter)

// Send 404 Error if route does not exists
app.use((req, res, next) => {
  next(createError(404))
})

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
