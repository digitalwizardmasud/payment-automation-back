const express = require('express')
const createPaymentController = require('../controllers/paymentController/createPaymentController')
const showPaymentsController = require('../controllers/paymentController/showPaymentsController')
const paymentRoute = express.Router()

paymentRoute.post("/create", createPaymentController)
paymentRoute.get("/show", showPaymentsController)

module.exports = paymentRoute