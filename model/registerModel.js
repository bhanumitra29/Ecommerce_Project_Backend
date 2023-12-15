const mongoose=require("mongoose");
const registerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
            },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }
})
const regSchema=mongoose.model('register',registerSchema);
module.exports= {regSchema}