const moment=require('moment')

const something=function(req,res,next){
    let date= moment().format("DD-MM-YYYY HH:mm:ss")
    let ip=req.ip
    let url=req.originalUrl
    console.log(date,ip,url)
    next()
}

module.exports.something= something
