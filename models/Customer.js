const{Schema, model} = require("mongoose");


const CustomerSchema  = Schema({
    Name: {
        type: String,
        required: true
    },
    Service: {
        type: String,
        required: true
    },
    AreaSize: {
        type: String
    },
    Location: {
        type: String,
        required: true
    },
    Admin: [{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    }]

});


const Customer = model("Customer" , CustomerSchema);


module.exports = Customer;