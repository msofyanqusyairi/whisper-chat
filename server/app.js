var express = require('express')
var session = require('express-session')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

/**
 * Database Connection
 */
dbUrl = 'mongodb://localhost:27017/chatting'
mongoose.connect(dbUrl, function(err){
  if(err) 
    console.log('DB CONNECTION ERROR:', err)
  else
    console.log('DB CONNECTED')
})

var index = require('./routes/index')
var api = require('./routes/api')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({secret:"this is secret!"}))

// app.use('/', index)
app.use('/api', api)

/* GET home page. */
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

/* GET register page. */
app.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/register.html'))
})

/* GET signin page. */
app.get('/signin', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/signin.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
