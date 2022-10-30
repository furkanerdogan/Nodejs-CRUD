//install express=> npm install express
const express=require("express");
const router=require("./routes/user-routes")
const mongoose=require("mongoose");

const app=express();

app.use(express.json())//for accepting json data  (like post request with json)
app.use("/users",router); //localhost/{thispart}


mongoose.connect("mongodb+srv://admin:admin@cluster0.us2czcx.mongodb.net/?retryWrites=true&w=majority")
.then(()=>app.listen(5000,()=>console.log("connected and listenin on port 5000")))
.catch((err)=>console.log("error",err));