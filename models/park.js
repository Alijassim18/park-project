const {Schema , model} = require("mongoose");

const parkSchema = Schema({
    state:{
         type:String,
         required: true,
         enum: ["available , unavailable"]
    },
    StartTime:{
        type:Date,
        required:true
    },
    EndTime:{
        type: Date,
        required: true
    },
    Paid: {
        type: Boolean,
        required: true
    }
    ,
    Companies: {
         type: Schema.Types.ObjectId,
        ref:"Companies"
    }
})


const park = model("park" , parkSchema);

module.exports = park;