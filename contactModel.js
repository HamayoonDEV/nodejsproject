const mongoose = require("mongoose");

const contactScema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add the contect"]
    },
    email:{
        type:String,
        required:[true,"please add the email address"]
    },
    phone:{
        type:String,
        required:[true,'please add the phone number']
    }
},
{
    timestamps:true,
}

);

module.exports = mongoose.model("contact",contactScema);