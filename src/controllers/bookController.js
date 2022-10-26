const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel=require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({data: savedData})
}

const getbookbyid= async function(req,res){
    let author= await authorModel.find({author_Name:"Chetan Bhagat"})
    let authorid=author[0].authorId
    let allbooks= await BookModel.find({authorId:authorid}).select({name:1,_id:0})
    res.send({data:allbooks})
}

const getupdateprice=async function(req,res){
    let book=await BookModel.findOneAndUpdate({name:"Two States"},{$set:{price:100}},{$new:true})
    let authorid=book.authorId
    let author_name=await authorModel.find({authorId:authorid}).select({author_Name:1,_id:0})
    res.send({data:book,author_name})
}

const pricebetween= async function(req,res){
    let books=await BookModel.find({price:{$gte:50,$lte:100}}).select({authorId:1,_id:0})
    let id=books.map(ele=>ele.authorId)
    let bag=[];
    for(let i=0; i<id.length;i++){
        let authorName= await authorModel.find({authorId:id[i]}).select({author_Name:1,_id:0})
        bag.push(authorName);
    }
    res.send(bag)
}

module.exports.createBook= createBook
module.exports.getbookbyid= getbookbyid
module.exports.getupdateprice=getupdateprice
module.exports.pricebetween=pricebetween