const express = require('express')
const signinController = require('../controllers/authController/signinController')
const AuthRoute = express.Router()

AuthRoute.post("/signin", signinController)

module.exports = AuthRoute