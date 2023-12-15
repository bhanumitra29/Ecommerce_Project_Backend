const {home, slider, TotalData} = require('../dummyData')
const { productDB } = require('../model/productModel')

// const storeController= (req,res)=>{
//     return res.send(store)
// }

const allDataController= (req,res)=>{
    return res.send(TotalData)
}

// const electronicsController= (req,res)=>{
    
//     return res.send(electronics)
// }

// const watchesController= (req,res)=>{
//     return res.send(watches)
// }

// const accessoriesController= (req,res)=>{
//     return res.send(accessories)
// }

const homeController= (req,res)=>{
    return res.send(home)
}

const slideController = (req,res)=>{
    return res.send(slider)
}

const addingData = async(req,res)=>{
   
    for(let i=0;i<TotalData.length;i++){
     await productDB.create(TotalData[i]);
    
    }
    return res.send("Success")
}

const datatoReact = async(req,res)=>{
    const result = await productDB.find({});
    console.log(result)
    return res.send(result)
}


module.exports={homeController,slideController,addingData,datatoReact,allDataController}