var User = require('../models/user')

module.exports = {
    find: function (callback) {
        // select all users object
        query = User.find({})
        query.select('-_id -__v')
        query.exec(callback)
    },
    findByUsername: function (username, callback) {
        // select user by its username
        query = User.findOne({
            username: username
        })
        query.select('-_id -__v')
        // get only one user, filter by username
        query.exec(callback)
    },
    authUser: function (username, password, callback) {
        // select user by its username and password
        query = User.findOne({
            $and: [{
                    username: username
                },
                {
                    password: password
                }

            ]
        })
        query.select('-_id -__v')
        // get only one user, filter by username
        query.exec(callback)
    },
    create: function (username, password, passkey, callback) {
        // create new object user
        userObj = {
            username: username,
            password: password,
            passkey: passkey
        }

        // make User instace
        user = new User(userObj)

        // save user instance to db
        user.save(function (err) {
            callback(err)
        })

    },
    update: function (param, username, password, passkey, callback) {
        // new object for user
        userObj = {
            username: username,
            password: password,
            passkey: passkey
        }
        User.update({
            username: param
        }, userObj, callback)
    },
    deleteOne: function (username, callback) {
        // delete object user by its username
        User.deleteOne({
            username: username
        }, callback)
    }

}