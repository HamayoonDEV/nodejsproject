const express = require("express");
const app  = express();
const dotenv = require("dotenv").config();
const port  = process.env.PORT || 5000;

app.use('/api/contacts',require("./routes/RouteContact"));
app.listen(port,()=>{
    console.log(`server is runing on port : ${port}`);
})