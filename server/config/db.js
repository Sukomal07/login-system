const mongoose = require('mongoose')
require('dotenv').config()
const connectToDb = async() =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        console.log("Connected To Db Successfull")
    })
    .catch((error) =>{
        console.log(error)
        process.exit(1)
    })
}

module.exports = connectToDb