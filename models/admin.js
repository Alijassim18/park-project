const {Schema , model} = require("mongoose");


const AdmingSchema = Schema({

    Name: {
        required: true,
        type:String
    },
    email: {
        required: true,
        type:String
    },
    password:{
        required: true,
        type:String
    }

});


const Admin = model("Admin" , AdmingSchema);

module.exports = Admin;