const UserModel= require("../models/userModel")

const createuser=async function(req,res){
    let data=req.body
    let newdata=req.headers.freeApp
    data.isFreeAppUser=newdata
    let alluser=await UserModel.create(data)
    res.send({user:alluser})
}

module.exports.createuser=createuser