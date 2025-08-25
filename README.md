# park-project


Project structure

The project was structured using a design pattern architecture called MVC:

  MVC stands for Model View Controller.

  See the Model is where you make the Schema of the entity where you give it the properties it requires. If We take these models:



          const {Schema , model} = require("mongoose");
      const bcrypt = require("bcrypt")

      const AdmingSchema = Schema({

    Name: {
        required: true,
        type:String
    },
    email: {
        required: true,
        type:String
    },
    password:{
        required: true,
        type:String
        
    } , 
    role: {
        type: String,
        enum: ["admin", "customer"],
        default: "customer"
      },
    

    } , {timestamps:true});


      AdmingSchema.methods.validatePassword = async function (passwordd) {
      return bcrypt.compare(passwordd , this.password)
      }

      const Admin = model("Admin" , AdmingSchema);

      module.exports = Admin;


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
     ParkNumber: {
        type: Number,
        required: true
    },
    Admin: [{
        type: Schema.Types.ObjectId,
        ref:"Admin"
    }]
      });


      const Companies = model("Companies" , CompaniesSchema);


    module.exports = Companies;



        const {Schema , model} = require("mongoose");

const parkSchema = Schema({
    state:{
         type:String,
         required: true,
         enum: ["available" , "unavailable"]

    
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
     //  type:String,
        required: true
    }
    ,
    slot: {
        type: String,
        required: true
    },
    Companies: {
         type: Schema.Types.ObjectId,
        ref:"Companies"
    }
      })


      const park = model("park" , parkSchema);

      module.exports = park;


   All of these models were established for the purpose of making  a capable parking system , however, something to keep in mind that not all of them were used due to change of plant.


In the Controller , this is where we apply the functionality needed for each model where we use the CRUD and implement its logic:


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


The view is where the react comes in , where their is no view here ,but instead it's applied in the other repository.



## Server.js 

      const express = require("express");
    const morgan = require("morgan");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const dotenv = require("dotenv").config();
    const AdminRouter = require("./routes/AdminRoutes")
    const CompanyRouter = require("./routes/CompanyRoutes")
      const CustomerRouter = require("./routes/CustomerRoutes")
    const parkRouter = require("./routes/ParkRoute")
      const bookRouter = require("./routes/bookRoutes")
    const app = express();


    //MARK: Database Connection

    mongoose.connect(process.env.URL);

    mongoose.connection.on("connected" , () => {
    console.log("Database is connected");
    })

      app.get("test",(req,res)=>{
    res.json("Test Success")
    })

    app.get("/jamal",(req,res)=>{
    res.json("Success")
    })
    //MARK: Middlewares
    app.use(cors({origin:"http://localhost:5173"}))
    app.use(morgan("dev"));
    app.use(express.json());
    app.use("/admin" , AdminRouter);
    app.use("/company" , CompanyRouter);
    app.use("/customer" , CustomerRouter)
    app.use("/book" ,bookRouter )
    app.use("/park" , parkRouter )

    app.use((req,res,next)=>{
    res.status(404).json("Route not found 404")
    })
    //MARK: Listening

    app.listen(3000 , () => {
    console.log("The backend is listening");
    })


  The server uses a cors to establish the connection with the fronted where it's specifically uses the url that the frontend provides us with


  
How to use the project

(1) Downlaod the prject from github

(2) Download the backend project from github

(3) Make sure that you run the frontend by calling npm run dev

(4) make sure to run the backend by typing nodemon server.js if you don't have nodemon type npm i -g nodemon

(5) Make sure that the cors is connected to localHost://5173 , it has to be 5173 if not you could simply change it depending on what the frontend Run's at it's provided on the console when you runt it
