const bookModel= require("../models/userModel")

const createbookdata= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getbooksData= async function (req, res) {
    let allBooks= await bookModel.find()
    res.send({msg: allBooks})
}

module.exports.createbookdata= createbookdata
module.exports.getbooksData= getbooksData