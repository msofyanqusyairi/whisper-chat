var express = require('express')
var router = express.Router()
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/index.html')
})

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.sendFile('/register.html')
})

/* GET signin page. */
router.get('/signin', function(req, res, next) {
  res.sendFile('/signin.html')
})

module.exports = router
