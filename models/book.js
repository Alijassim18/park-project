const {Schema , model} = require("mongoose");


const bookModel = Schema ({
    parkID: {
        type: Schema.Types.ObjectId,
        ref:"park",
        required: true
    },
    UserID: {
        type: Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    }
})


const book =  model("book" , bookModel);

module.exports = book;