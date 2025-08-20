const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors")
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

