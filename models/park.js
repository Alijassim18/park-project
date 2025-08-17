const {Schema , model} = require("mongoose");

const parkSchema = Schema({
    state:{
         type:String,
         required: true
    },
    StartTime:{
        type:Date,
        required:True
    },
    EndTime:{
        type: Date,
        required: true
    },
    Paid: {
        type: Boolean,
        required: True
    }
    ,
    Companies: {
         type: Schema.Types.ObjectId,
        ref:"Companies"
    }
})