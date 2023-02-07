const express = require("express");

const router = express.Router()
const {getContacts,getContact,createContact,updateContact,deleteContect} = require('./controller/contactController');

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContect);

module.exports = router;
