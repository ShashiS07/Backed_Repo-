const OrderModel = require("../models/orderModel")
const UserModel=require("../models/userModel")
const ProductModel=require("../models/productModel")

const createorder= async function(req,res){
    let data=req.body
    let FreeAppUser=req.headers.freeapp

    let finduser= await UserModel.findById({_id:data.userId})
    if(!finduser){
        return res.send({status:false,error:"user is invalid"})
    }

    let findproduct= await ProductModel.findById({_id:data.productId})
    if(!findproduct){
        return res.send({status:false, error:"product is invalid"})
    }

    if(!FreeAppUser){
        if(finduser.balance >= data.amount){
            let ordercreate=await OrderModel.create(data)
            let update= await UserModel.updateOne({_id:finduser},{$inc:{balance:-data.amount}})
            let update2= await UserModel.updateOne({_id:finduser},{$set:{isFreeAppUser:FreeAppUser}})
            return res.send({order:ordercreate})
        }
        else if(finduser.balance<=data.amount){
            return res.send({status:true, msg:"the user does not have enough balance"})
        }
        else if(FreeAppUser){
            let ordercreate=await OrderModel.create(data)
            let update=await OrderModel.updateOne({_id:ordercreate._id},{$set:{amount:0}})
            let update2= await orderModel.updateOne({_id:finduser._id},{$set:{isFreeAppUser:FreeAppUser}})
            return res.send({order:ordercreate})
        }
    }
}

module.exports.createorder=createorder