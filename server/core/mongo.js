let config = require("../config");

let chalk = require("chalk");
let mongoose = require("mongoose");
let autoIncrement = require("mongoose-auto-increment");

module.exports = function () {
    let db;

    // logger.info();

    mongoose.Promise = global.Promise;

    db = mongoose.createConnection(config.db.uri, config.db.options, function mongoAfterConnect(err) {
        if (err) {
        }
    });

    return db;
};