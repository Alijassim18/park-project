const{Schema, model} = require("mongoose");


const CompaniesSchema  = Schema({
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


const Companies = model("Companies" , CompaniesSchema);


module.exports = Companies;