const Customer = require("../models/Customer");


async function createCustomer(request, response) {

    try {
        console.log("In Route")

        const Customerr  = await Customer.create(request.body);
                        response.status(201).json(Customerr);

    }catch(err) {
        console.log("Their is an error creating Admin: ",err);
        response.status(500).json({error : err.message});
    }

};

async function getCustomer(request, response) {
    try {
        const CustomerGet  = await Customer.find();
        response.status(201).json(CustomerGet);
    }catch(err) {
        console.log("Their is an error getting Admin: ",err);
    };
    
};
async function updateCustomer(request, response) {
    
    try {

        const CustomerU = await Customer.findByIdAndUpdate(request.params.id , request.body);
        if(CustomerU) {
            response.status(200).json(Customer);
         }
            else {
                response.sendStatus(404).json;
            }

    }catch(err) {
        console.log("Their is an error updating Admin: ",err)
    }
}

async function deleteCustomer(request, response) {

    try {
         const Customerr = await Customer.findByIdAndDelete(request.params.id);


         if(Customerr) {
            response.status(200).json(Customer);
         }
            else {
                response.sendStatus(404).json;
            }


    }catch(err) {
        console.log("Their is an error deleting Admin: ",err)
        response.status(500).json({error : err.message});
    }


 
}

async function CustomerById(request, response) {

    try {
         const Customerr = await Customer.findById(request.params.id);


         if(Customerr) {
            response.status(200).json(Customer);
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
    createCustomer,
    getCustomer,
    updateCustomer , 
    deleteCustomer,
    CustomerById

}

