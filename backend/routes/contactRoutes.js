const express = require('express');
const router = express.Router();
const { getAllContact, createContact, getContact, updateContact, deleteContact } = require('../../controllers')

router.route('/').get(getAllContact).post(createContact);
router.route('/:id').get(getContact).put(updateContact),this.delete(deleteContact);

module.exports = router;