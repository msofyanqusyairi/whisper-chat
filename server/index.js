var path = require("path")

global.WEBPACK_BUNDLE = false;

let config = require("./config");
let moment = require("moment");
let chalk = require("chalk");
let db = require("./core/mongo")();
let app = require("./core/express")(db);

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "pug");

app.listen(config.port, config.ip, function () {
});


exports = module.exports = app;