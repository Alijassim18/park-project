const park = require("../models/park");


async function createPark(request, response) {

    try {
        console.log("In Route")

        const parkk  = await park.create(request.body);
                        response.status(201).json(parkk);

    }catch(err) {
        console.log("Their is an error creating Admin: ",err);
        response.status(500).json({error : err.message});
    }

};
async function getPark(request, response) {
    try {
        const parkGet  = await park.find();
        response.status(201).json(parkGet);
    }catch(err) {
        console.log("Their is an error getting Admin: ",err);
    };
    
};
