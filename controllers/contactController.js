const getAllContact = (req, res) => {
    res.status(200).json({message: `Get all contacts`});
};

const createContact = (req, res) => {
    console.log("the req body is", req.body)
    res.status(200).json({message: `Create contacts`});
    const {name, email, phone} = req.body;
    if(!name ||!email ||!phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
};

const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

const updateContact = (req, res) => {
    res.status(200).json({message: `Create contacts`});
};

const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
};

module.exports = { getAllContact, createContact, getContact, updateContact, deleteContact }