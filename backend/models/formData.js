const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema ({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    dob : String,
    address : String,
    city : String,
    country : String
})

const FormDataModel = mongoose.model("login_register", FormDataSchema);

module.exports = FormDataModel;