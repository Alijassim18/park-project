const Companies = require("../models/Companies");
const { AdminById } = require("./admin");



async function createCompany(request, response) {

    try {
        console.log("In Route")

        const Company  = await Companies.create(request.body);
                        response.status(201).json(Company);

    }catch(err) {
        console.log("Their is an error creating Admin: ",err);
        response.status(500).json({error : err.message});
    }

};

async function getCompany(request, response) {
    try {
        const CompanyGet  = await Companies.find();
        response.status(201).json(CompanyGet);
    }catch(err) {
        console.log("Their is an error getting Admin: ",err);
    };
    
};
async function updateCompany(request, response) {
    
    try {

        const CompanyU = await Companies.findByIdAndUpdate(request.params.id , request.body);
        if(CompanyU) {
            response.status(200).json(Companies);
         }
            else {
                response.sendStatus(404).json;
            }

    }catch(err) {
        console.log("Their is an error updating Admin: ",err)
    }
}

async function deleteCompany(request, response) {

    try {
         const Company = await Companies.findByIdAndDelete(request.params.id);


         if(Company) {
            response.status(200).json(Companies);
         }
            else {
                response.sendStatus(404).json;
            }


    }catch(err) {
        console.log("Their is an error deleting Admin: ",err)
        response.status(500).json({error : err.message});
    }


 
}

async function CompanyById(request, response) {

    try {
         const Company = await Companies.findById(request.params.id);


         if(Company) {
            response.status(200).json(Companies);
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
    createCompany,
    getCompany,
    updateCompany , 
    deleteCompany,
    AdminById

}
