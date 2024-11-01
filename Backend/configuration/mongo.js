const mongoose = require('mongoose')
require('dotenv').config();


const connection = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("database is connected")
    }

    catch(err){
        console.log(`error :${err}`);
        process.exit()
    }
}

module.exports=connection