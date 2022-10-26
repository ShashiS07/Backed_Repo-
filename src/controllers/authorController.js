const Authormodel=require("../models/authorModel")

const createAuthor=async function(req,res){
    let data=req.body
    let authors=await Authormodel.create(data)
    res.send({data:authors})
}

module.exports.createAuthor=createAuthor