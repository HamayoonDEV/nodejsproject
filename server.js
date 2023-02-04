const express = require("express");
const app  = express();
const dotenv = require("dotenv").config();
const port  = process.env.PORT || 5000;

app.get('/api/contacts',(req,res)=>{
    res.status(200).json({message:"this is me hamayoon"})
})
app.listen(port,()=>{
    console.log(`server is runing on port : ${port}`);
})