var express = require('express')
var router = express.Router()

/* import module controllers */
UserController = require('../controllers/userController')

/* get users listing */
router.get('/user', function (req, res) {
    console.log('REQUEST USERS')
    UserController.find(function (err, users) {
        responseBuilder = {
            error: err,
            user: users
        }
        if (err)
            return res.status(500).send(responseBuilder)
        else
            return res.status(200).send(responseBuilder)
    })
})

/* get user by username */
router.get('/user/:username', function (req, res) {
    console.log('REQUEST FOR USERNAME:', req.params.username)
    /**
     * params :
     * - username
     */
    username = req.params.username
    UserController.findByUsername(username, function (err, user) {
        responseBuilder = {
            error: err,
            user: user
        }
        if (err)
            return res.status(500).send(responseBuilder)
        else
            return res.status(200).send(responseBuilder)
    })
})

/* post new user */
router.post('/user', function (req, res) {
    /**
     * payload body:
     * - username: <stirng>
     * - password: <string>
     * - passkey: <string>
     */
    console.log('NEW USER:', JSON.stringify(req.body))

    reqBody = req.body
    username = reqBody.username
    password = reqBody.password
    passkey = reqBody.passkey

    UserController.create(username, password, passkey, function (err) {
        if (err)
            return res.status(500).send(err)
        else
            return res.status(200).send({
                status: 'created'
            })
    })
})

/* update user by it username */
router.put('/user/:username', function (req, res) {
    /**
     * payload body:
     * - username: <stirng>
     * - password: <string>
     * - passkey: <string>
     */
    console.log('UPDATE USER:', req.params.username)
    console.log('UPDATE USER WITH:', JSON.stringify(req.body))

    reqBody = req.body
    param = req.params.username
    username = reqBody.username
    password = reqBody.password
    passkey = reqBody.passkey

    UserController.update(param, username, password, passkey, function (err) {
        if (err)
            return res.status(500).send(err)
        else
            return res.status(200).send({
                status: 'updated'
            })
    })
})

/* delete user by it username */
router.delete('/user/:username', function (req, res) {
    console.log('DELETED USER:', req.params.username)
    /**
     * params :
     * - username
     */
    username = req.params.username
    UserController.deleteOne(username, function (err) {
        if (err)
            return res.status(500).send(err)
        else
            return res.status(200).send({
                status: 'deleted'
            })
    })
})

module.exports = router