const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const conectDb  = require("./config/connectDb");
const app  = express();
const dotenv = require("dotenv").config();
const port  = process.env.PORT || 5000;
conectDb();
app.use(express.json());
app.use('/api/contacts',require("./routes/RouteContact"));
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is runing on port : ${port}`);
})