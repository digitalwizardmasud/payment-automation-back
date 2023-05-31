const express = require('express')
const createPayment = require('../controllers/paymentController/createPayment')
const showPayments = require('../controllers/paymentController/showPayments')
const paymentRoute = express.Router()

paymentRoute.post("/create", createPayment)
paymentRoute.get("/show", showPayments)

module.exports = paymentRoute