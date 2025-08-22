const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const AdminRouter = require("./routes/AdminRoutes");
const CompanyRouter = require("./routes/CompanyRoutes");

const ParkRouter = require("./routes/ParkRoute");
const BookRouter = require("./routes/bookRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

mongoose.connect(process.env.URL)
  .then(() => console.log("Database is connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev"));
app.use(express.json());

app.use("/admin", AdminRouter);
app.use("/company", CompanyRouter);
app.use("/book", BookRouter);
app.use("/park", ParkRouter);
app.use("/auth", authRoutes);

app.get("/test", (req, res) => res.json("Test Success"));
app.get("/jamal", (req, res) => res.json("Success"));

app.use((req, res) => {
  res.status(404).json("Route not found 404");
});


app.listen(3000, () => {
  console.log("The backend is listening on port 3000");
});
