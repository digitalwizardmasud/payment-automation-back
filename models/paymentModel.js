const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
    },
    paymentMethod: {
        type: String,
    },
    status: {
        type: String,
        default: 'running'
    }
})

const PaymentModel = mongoose.model("payment", PaymentSchema)
module.exports = PaymentModel