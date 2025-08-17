const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const App = express();


//MARK: Database Connection

mongoose.connect(process.env.URL);

mongoose.connection.on("connected" , () => {
    console.log("Database is connected");
})


//MARK: Middlewares
App.use(morgan);
App.use(morgan("dev"));
App.use(express.json);


//MARK: Listening

App.listen(3000 , () => {
    console.log("The backend is listening");
})

