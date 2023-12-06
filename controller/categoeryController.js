const {mobiles,electronics,watches,accessories,store,home, slider} = require('../dummyData')
const { productDB } = require('../model/productModel')

const storeController= (req,res)=>{
    return res.send(store)
}

const mobilesController= (req,res)=>{
    return res.send(mobiles)
}

const electronicsController= (req,res)=>{
    
    return res.send(electronics)
}

const watchesController= (req,res)=>{
    return res.send(watches)
}

const accessoriesController= (req,res)=>{
    return res.send(accessories)
}

const homeController= (req,res)=>{
    return res.send(home)
}

const slideController = (req,res)=>{
    return res.send(slider)
}

const register = async(req,res)=>{
    const data= {
        name:"Bhanu",
        email:"bhanu@gmail.com",
        password:"bhanu123",
        mobileNumber:1234567
    }
    const response = await productDB.create(data);
    console.log(response)
    return res.send(response)
}


module.exports={storeController,mobilesController,electronicsController,accessoriesController,watchesController,homeController,slideController}