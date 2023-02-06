const getContacts = (req,res)=>{
    res.status(200).json({message:"get contacts"})
}
const createContact = (req,res)=>{
    res.status(200).json({message:"create contacts"})
}

const getContact = (req,res)=>{
    res.status(200).json({message:`get contacts for ${req.params.id}`})
}

const updateContact = (req,res)=>{
    res.status(200).json({message:`update contacts for ${req.params.id}`})
}

const deleteContect = (req,res)=>{
    res.status(200).json({message:`delete contacts for ${req.params.id}`})
}

module.exports = {getContacts,getContact,createContact,updateContact,deleteContect};