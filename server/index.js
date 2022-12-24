const express = require("express")
const cors = require("cors")
// const bodyParser = require('body-parser')
const paymentRoute = require("./Routes/payment")
const dotenv = require("dotenv")


const app = express()
const port = 8080

//environment variable
dotenv.config();

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/payment/',paymentRoute);


app.listen(port,()=>{
    console.log(`app is running on ${port}`)
})