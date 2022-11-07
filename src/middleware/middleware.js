const jwt=require('jsonwebtoken')
const userModel=require("../models/userModel")

const middleware=async function(req,res,next){
  try{
    let token =req.headers["x-Auth-token"]
    if (!token) token = req.headers["x-auth-token"];
    if(!token) return res.status(404).send({status:false, error:"token must be present"})
  
    let decodetoken= jwt.verify(token,"assignment-key")
  
    // if(!decodetoken) return res.status(403).send({status:false,error:"token is invalid"})
  
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
   
    if (!user) {
      return res.status(403).send({status:false,error:"No such user exist"});
    }
    if(decodetoken.userId !==userId){
      return res.status(401).send({status:false,error:"user are not authorised"})
    }
    next();
  }
  catch(error){
    res.status(500).send({error:error.message})
  }
}

module.exports.middleware=middleware