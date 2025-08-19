const Admin = require("../models/admin");



async function craeteAdmin(request, response) {

    try {
        console.log("In Route")

        const Adminn  = await Admin.create(request.body);
                        response.status(201).json(Adminn);

    }catch(err) {
        console.log("Their is an error creating Admin: ",err);
        response.status(500).json({error : err.message});
    }

};

async function getAdmin(request, response) {
    try {
        const AdminnGet  = await Admin.find();
        response.status(201).json(AdminnGet);
    }catch(err) {
        console.log("Their is an error getting Admin: ",err);
    };
    
};
async function updateAdmin(request, response) {
    
    try {

        const AdminU = await Admin.findByIdAndUpdate(request.params.id , request.body);
        if(AdminU) {
            response.status(200).json(Admin);
         }
            else {
                response.sendStatus(404).json;
            }

    }catch(err) {
        console.log("Their is an error updating Admin: ",err)
    }
}

async function deleteAdmin(request, response) {

    try {
         const admin = await Admin.findByIdAndDelete(request.params.id);


         if(admin) {
            response.status(200).json(admin);
         }
            else {
                response.sendStatus(404).json;
            }


    }catch(err) {
        console.log("Their is an error deleting Admin: ",err)
        response.status(500).json({error : err.message});
    }


 
}

async function AdminById(request, response) {

    try {
         const admin = await Admin.findById(request.params.id);


         if(admin) {
            response.status(200).json(admin);
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
    craeteAdmin,
    getAdmin,
    updateAdmin , 
    deleteAdmin,
    AdminById

}
