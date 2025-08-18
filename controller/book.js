const book = require("../models/book");


async function createbook(request, response) {

    try {
        console.log("In Route")

        const bookk  = await book.create(request.body);
                        response.status(201).json(bookk);

    }catch(err) {
        console.log("Their is an error creating Admin: ",err);
        response.status(500).json({error : err.message});
    }

};
async function getbook(request, response) {
    try {
        const bookGet  = await book.find();
        response.status(201).json(bookGet);
    }catch(err) {
        console.log("Their is an error getting Admin: ",err);
    };
    
};
async function updatebook(request, response) {
    
    try {

        const bookU = await book.findByIdAndUpdate(request.params.id , request.body);
        if(bookU) {
            response.status(200).json(book);
         }
            else {
                response.sendStatus(404).json;
            }

    }catch(err) {
        console.log("Their is an error updating Admin: ",err)
    }
}

async function deletebook(request, response) {

    try {
         const bookk = await book.findByIdAndDelete(request.params.id);


         if(bookk) {
            response.status(200).json(book);
         }
            else {
                response.sendStatus(404).json;
            }


    }catch(err) {
        console.log("Their is an error deleting Admin: ",err)
        response.status(500).json({error : err.message});
    }


 
}

async function bookById(request, response) {

    try {
         const bookk = await book.findById(request.params.id);


         if(bookk) {
            response.status(200).json(book);
         }
            else {
                response.sendStatus(404).json;
            }


    }catch(err) {
        console.log("Their is an error deleting Admin: ",err)
        response.status(500).json({error : err.message});
    }
    

}


module.exports = {
    createbook,
    getbook,
    updatebook , 
    deletebook,
    bookById

}


