const asyncHandler = require('express-async-handler');
// install asynchandler
// wrap handler in async so we dont have to write a try catch block in order to catch an order
// handler automatically when exception has occured passes to handler

const getAllContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Get all contacts`});
});

const createContact = asyncHandler(async(req, res) => {
    console.log("the req body is", req.body)
    res.status(200).json({message: `Create contacts`});
    const {name, email, phone} = req.body;
    if(!name ||!email ||!phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({ message: "Create Contact"});
});

const getContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
});

const updateContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Create contacts`});
});

const deleteContact = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
});

module.exports = { getAllContact, createContact, getContact, updateContact, deleteContact }