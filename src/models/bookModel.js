const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
        name:String,
        authorId:{
            type:Number,
            required:true,
        },
        price:Number,
        ratings:Number
}, { timestamps: true });

module.exports = mongoose.model('Authorbook', bookSchema)
