var express = require('express')
var app = express()

module.exports = function(){
    require("../routes")(app)
    return app
}