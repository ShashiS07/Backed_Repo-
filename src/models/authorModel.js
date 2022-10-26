const mongoose = require('mongoose');
let authorSchema= new mongoose.Schema({
    authorId:{
        type:Number,
        required:true,
    },
    author_Name:String,
    age:Number,
    address:String
},{timestamps:true})
module.exports=mongoose.model("Author",authorSchema)
