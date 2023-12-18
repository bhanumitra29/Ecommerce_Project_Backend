const jwt=require('jsonwebtoken');
// const { secret_key } = require('./secret');
const secret_key = "bhanu"
const authh=(req,res,next)=>{
    const BearerToken=req.headers['authorization'];
    console.log("this is bearer", BearerToken);
    console.log(BearerToken)
    
    if(BearerToken){
        const token=BearerToken.split(" ")[1];
        try{
        const isvaliduser=jwt.verify(token,secret_key)
        if(isvaliduser){
            req.user=isvaliduser;
            next();
        }
    else{
        console.log({msg:"Not Authorized"})
    }
    }
    catch(error){
        console.log({msg:error})
    }
}
else{
    console.log("user not allowed")
}

}
module.exports= {authh};