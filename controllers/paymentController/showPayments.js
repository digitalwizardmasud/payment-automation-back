const PaymentModel = require("../../models/paymentModel");

const showPayments = (req, res) => {
  const { email } = req.query;
  if (!email) {
    res.status(400).send({ status: "UnSuccessful", msg: "Invalid Data" });
  } else {
    PaymentModel.find({email})
      .then((result) => {
        res.send({ status: "Successful", result});
      })
      .catch((err) => {
        res.send({ status: "Server error", msg: err.message });
      });
  }
};
module.exports = showPayments;
