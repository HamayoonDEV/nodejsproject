const asyncHandler = require("express-async-handler")
const contact  = require("./contactModel")
 const getContacts = asyncHandler(async (req,res)=>{
    const contacts = contact.find()
    res.status(200).json(contacts)
 });
const createContact = asyncHandler(async (req,res)=>{
    console.log("the request body is: ",req.body)
    res.status(201).json({message:"create contacts"})
    const {email,name,phone} = req.body;
    if(!name || !body || !email){
        req.status(400);
        throw new Error("All fields are medotory!!!!")
    }
});

const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`get contacts for ${req.params.id}`})
});

const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`})
});

const deleteContect =asyncHandler(async (req,res)=>{
    res.status(200).json({message:`delete contacts for ${req.params.id}`})
});

module.exports = {getContacts,getContact,createContact,updateContact,deleteContect};