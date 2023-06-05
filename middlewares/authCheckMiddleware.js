
const jwt = require('jsonwebtoken');


const AuthCheckMiddleware = (req, res, next) =>{
    const JWT_KEY = process.env.JWT_KEY
    var decoded = jwt.verify(req.headers.token, JWT_KEY);
    req.user=decoded
    next()
}

module.exports = AuthCheckMiddleware