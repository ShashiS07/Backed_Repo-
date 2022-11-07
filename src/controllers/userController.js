const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
try{
  let data=req.body;
  if(Object.keys(data).length!=0){
    let savedData= await userModel.create(data);
    res.status(201).send({users:savedData})
  }else{
    res.status(400).send({msg:"Bad Request"})
  }
}
catch(error){
  res.status(500).send({msg:"error", error: error.message})
}
};

const loginUser = async function (req, res) {
try{
  let username=req.body.emailId
  let password=req.body.password

  let user=await userModel.findOne({emailId:username,password:password})
  if(!user) return res.status(400).send({status:false, error:"Username or password is invalid"});

  let token= jwt.sign({userId:user._id.toString()},"assignment-key")
  res.setHeader("x-auth-token",token);
  res.status(201).send({status:true,token:token})
}
catch(error){
  res.status(500).send({msg:"error",error:error.message})
}
};

const getUserData = async function (req, res) {
  try{
    let userId= req.params.userId;
    let userdetail= await userModel.findById(userId)

    // if(!userdetail) res.status(400).send({status:false, error:"No such user exist"})
    
    res.status(200).send({status:true,user:userdetail})
  }
  catch(error){
    res.status(500).send({error:error.message})
  }
};

const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  // let user = await userModel.findById(userId);
 
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:userData},{new:true});
  res.status(200).send({ status: true, data: updatedUser });
}
catch(error){
  res.status(500).send({error:error.message})
}
};

const deleteuser= async function(req,res){
try{
  let userId = req.params.userId;
  // let user = await userModel.findById(userId);

  let userData = req.body;
  let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:userData},{new:true});
  res.status(201).send({ status: true, data: deleteUser });
}
catch(error){
  res.status(500).send({error:error.message})
}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser;
