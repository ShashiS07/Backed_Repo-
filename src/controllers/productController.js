const productModel= require("../models/authorModel")

const createproduct= async function(req,res){
    let data=req.body
    let product=await productModel.create(data)
    res.send({products:product})
}

module.exports.createproduct=createproduct