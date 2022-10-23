const mongoose= require('mongoose')

const bookschema= new mongoose.Schema( {
    BookName:{
        type:String,
        required:true
    },
    AutherName:{
        firstName:String,
        lastName:String
    },
    category:String,
    Year:Number
},{timestamps:true});

module.exports = mongoose.model('book', bookschema)
