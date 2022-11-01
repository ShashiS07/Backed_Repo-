const UserModel= require("../models/userModel")

const first= async function(req,res){
    res.send("You got current date,ip and api")
} 
const second= async function (req,res){
    res.send("You got current date,ip and api")
}

const third= async function(req,res){
    res.send("You got current date,ip and api")
}
const fourth= async function(req,res){
    res.send("You got current date,ip and api")
}

module.exports.first= first
module.exports.second= second
module.exports.third= third
module.exports.fourth= fourth