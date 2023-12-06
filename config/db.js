const cloudUrl = "mongodb+srv://bhanumitra29:Bhanu2923@cluster0.k26w3ri.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose')
mongoose.set("strictQuery",true)

const connection = async()=>{
    try{
        await mongoose.connect(cloudUrl)
        console.log("connection made sucessfully")
    }
    catch(err){
        console.log(err,"occured during connection with DB")
    }
}

module.exports= {connection};