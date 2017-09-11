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
router.post('/register', function (req, res) {
    /**
     * payload body:
     * - username: <string>
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

/* auth user */
router.post('/signin', function(req, res){
    /**
     * payload body:
     * - username: <string>
     * - password: <string>
     */
    username = req.body.username
    password = req.body.password
    console.log('SIGIN USER:', JSON.stringify(username))
    console.log('SIGIN PASSWORD:', JSON.stringify(password))
    UserController.authUser(username, password, function(result){
        console.log("GET RESULT", result)
        if(result){
            req.session.user = username
        }
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