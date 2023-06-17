const mongoose = require('mongoose')

const {connectDatabase} = require("./config/database")

connectDatabase()

exports.connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL).then((con)=> 
    console.log(`Database Connected: ${con.connection.host}`)).catch((err)=>
    console.log(err))
}