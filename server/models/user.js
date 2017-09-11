var mongoose = require('mongoose')

UserSchema = mongoose.Schema({
    username: {type: String, default: ''},
    password: {type: String},
    passkey: {type: String}
})

module.exports = mongoose.model('UserSchema', UserSchema)