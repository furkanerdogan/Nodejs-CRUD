const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        required: 'Please enter your name',
        trim: true

    },
    email:{
        type:String,
        unique:true,
        required: 'Please enter your email',
        trim: true

    },
    password:{
        type:String,
        required: true,
        minLenght:6,
    },
});

module.exports=mongoose.model("User",userSchema);

