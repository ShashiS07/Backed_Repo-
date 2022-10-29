const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const mongoose=require("mongoose")
const createBook= async function (req, res) {
    let book = req.body
    let authorid=book.author
    let publisherid=book.publisher
    if(!authorid){
        return res.send("authorid is required")
    }else if(!mongoose.Types.ObjectId.isValid(authorid)){
        return res.send("Author is not present")
    }else if(!publisherid){
        return res.send("publisher is required")
    }else if(!mongoose.Types.ObjectId.isValid(publisherid)){
        return res.send("Publisher is not present")
    }else{ 
        let bookcreated= await bookModel.create(book)
        return res.send({data:bookcreated})
    }
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}
const updatehardcover= async function (req,res){
let publisherid= await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
let data= req.body
let updatedbook= await bookModel.updateMany(
    {publisher:{$in:publisherid}},
    {$set:data},
    {new:true})
res.send({data:updatedbook})
}

const updateprice= async function (req,res){
    let authorid= await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let updatedbook= await bookModel.updateMany(
        {author:{$in:authorid}},
        {$inc:{price:10}}
    )
    res.send({updatedprice:updatedbook})
}
module.exports.createBook= createBook
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatehardcover = updatehardcover
module.exports.updateprice = updateprice

