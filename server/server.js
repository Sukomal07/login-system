const express = require('express')
const connectToDb = require('./config/db')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes.js')
require('dotenv').config()


const app = express()

app.use(cors({
    origin: 'http://localhost:5500',
    credentials:true,
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/", userRoutes)




app.listen(process.env.PORT, ()=>{
    connectToDb()
    console.log(`Server is running on ${process.env.PORT}`)
})
