const express=require('express');
const cors=require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDb= require("./config/dbConnection");
const dotenv=require("dotenv").config();
require("dotenv").config();
connectDb();
const app=express();
const port=process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use("/api/reclamation",require("./routes/reclamationsRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})