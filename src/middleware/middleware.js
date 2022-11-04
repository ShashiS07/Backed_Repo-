const jwt=require('jsonwebtoken')
const userModel=require("../models/userModel")

const middleware=async function(req,res,next){
    let token =req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"];
    if(!token) return res.send({status:false, error:"token must be present"})
  
    let decodetoken=await jwt.verify(token,"assignment-key")
  
    if(!decodetoken) return res.send({status:false,error:"token is invalid"})
  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
   
    if (!user) {
      return res.send({status:false,error:"No such user exist"});
    }
    if(decodetoken.userId !==userId){
      return res.send({status:false,error:"user are not authorised"})
    }
    next();
}

module.exports.middleware=middleware