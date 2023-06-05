const PaymentModel = require("../../models/paymentModel")

const createPaymentController = (req, res) => {
    const {email, amount, paymentId} = req.body
    if(!email || !amount || !paymentId){
        res.status(400).send({status:'UnSuccessful', msg: 'Invalid Data'})
    }else{
        const PayInfo = new PaymentModel({
            email, amount, paymentId
        })
        PayInfo.save()
        .then(()=>{
            res.send({status:'Successful'})
        })
        .catch(err=>{
            res.status(500).send({status:'Server Error', msg: err.message}) 
        })
    }
}
module.exports = createPaymentController
