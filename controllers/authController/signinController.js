const jwt = require('jsonwebtoken')
const signinController = (req, res) => {
    const JWT_KEY = process.env.JWT_KEY
    const {displayName, email, photoURL } = req.body
    const token = jwt.sign({displayName, email, photoURL}, JWT_KEY);
    res.send({status:'ok', token})
}
module.exports = signinController