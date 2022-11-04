const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {

  let data=req.body;
  let savedData= await userModel.create(data);
  res.send({users:savedData})
};

const loginUser = async function (req, res) {

  let username=req.body.emailId
  let password=req.body.password

  let user=await userModel.findOne({emailId:username,password:password})
  if(!user) return res.send({status:false, error:"Username or password is invalid"});
  let token= jwt.sign({userId:user._id.toString()},"assignment-key")
  res.setHeader("x-auth-token",token);
  res.send({status:true,token:token})

};

const getUserData = async function (req, res) {

    let userId= req.params.userId;
    let userdetail= await userModel.findById(userId)
    
    res.send({status:true,user:userdetail})

};

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:userData},{new:true});
  res.send({ status: true, data: updatedUser });
};

const deleteuser= async function(req,res){

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  let userData = req.body;
  let deleteUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:userData},{new:true});
  res.send({ status: true, data: deleteUser });

}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteuser = deleteuser;
