const { count } = require("console")
const BookModel= require("../models/bookModel")
// problem 1
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

// problem 2
const getBooksData= async function (req, res) {
    let allBooks=await BookModel.find().select({bookName:1, authorName:1,_id:0}) 
    res.send({msg: allBooks})
    }
// problem 3

const getBookByYear= async function(req,res){
    let year= req.query.year
    let BooksbyYear= await BookModel.find({Year:year})
    res.send({msg:BooksbyYear})
}
// problem 4

const getPerticularBooks= async function(req,res){
    let data=req.body
    let perticularBook= await BookModel.find(data)
    res.send({msg:perticularBook})
}
// problem 5

const getIndianBooks=async function(req,res){
    let IndianBooks = await BookModel.find({'prices.indianPrice':{$in:["Rs. 200","Rs. 100","Rs. 500"]}}).select({bookName:1, prices:1, _id:0})
    res.send({msg: IndianBooks})
}
// problem 6

const getrandombooks=async function(req,res){
    let allrandomBooks=await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]}).select({bookName:1, stockAvailable:1, totalPages:1,_id:0})
    res.send({msg:allrandomBooks})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBookByYear= getBookByYear
module.exports.getPerticularBooks= getPerticularBooks
module.exports.getIndianBooks= getIndianBooks
module.exports.getrandombooks= getrandombooks