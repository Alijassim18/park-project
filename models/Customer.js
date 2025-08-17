const{Schema, model} = require("mongoose");


const CustomerSchema  = Schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        required: true,
        type:String
    },
    password:{
        required: true,
        type:String
    },
    Admin: [{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    }]


});


const Customer = model("Customer" , CustomerSchema);


module.exports = Customer;