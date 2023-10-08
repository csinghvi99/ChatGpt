const mongoose = require('mongoose')
const colors = require('colors')

const connectDb= async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen.white
        )
    } catch (error) {
        console.log(`Mongodb database error ${error}`.bgRed.white)
    }
}
module.exports=connectDb