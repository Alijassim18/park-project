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
async function updatePark(request, response) {
    
    try {

        const parkU = await park.findByIdAndUpdate(request.params.id , request.body);
        if(parkU) {
            response.status(200).json(park);
         }
            else {
                response.sendStatus(404).json;
            }

    }catch(err) {
        console.log("Their is an error updating Admin: ",err)
    }
}

async function deletePark(request, response) {

    try {
         const parkk = await park.findByIdAndDelete(request.params.id);


         if(parkk) {
            response.status(200).json(park);
         }
            else {
                response.sendStatus(404).json;
            }


    }catch(err) {
        console.log("Their is an error deleting Admin: ",err)
        response.status(500).json({error : err.message});
    }


 
}

async function ParkById(request, response) {

    try {
         const Parkk = await park.findById(request.params.id);


         if(Parkk) {
            response.status(200).json(park);
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
    createPark,
    getPark,
    updatePark , 
    deletePark,
    ParkById

}


