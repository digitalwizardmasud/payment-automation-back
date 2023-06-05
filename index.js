const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const paymentRoute = require('./routes/paymentRoute')
const AuthRoute = require('./routes/authRoute')
const AuthCheckMiddleware = require('./middlewares/authCheckMiddleware')
const app = express()
const PORT = process.env.PORT || 8000
const DB = process.env.DB


app.use(cors())
app.use(express.json())

app.use("/auth", AuthRoute)
app.use("/payment", paymentRoute)
app.get("/", AuthCheckMiddleware, (req, res)=>{
    res.send(req.user)
})
app.listen(PORT, ()=>{
    console.log('Server is running on port: ', PORT);
})
mongoose.connect(DB)
.then(()=>{
    console.log('Database Connected')
})