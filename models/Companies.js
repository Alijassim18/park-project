const{Schema, model} = require("mongoose");


const CompaniesSchema  = Schema({
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


const Companies = model("Companies" , CompaniesSchema);


module.exports = Companies;