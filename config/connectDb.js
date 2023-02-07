const mongoose = require("mongoose");

const conectDb = async()=>{

    try{
        const connect = await mongoose.connect(process.env.CONTECTION_STRING);
        console.log("Data base is connected", connect.connection.host,connect.connection.name);
    
    }catch(err){
        console.log(err)
        process.exit(1);
    }
}

module.exports = conectDb;