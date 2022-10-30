//install express=> npm install express
const express=require("express");

const app=express();

app.use("/",(req,res,next)=>{
res.send("this is respond")
});
app.listen(5000,()=>console.log("connected to localhost port 5000"))