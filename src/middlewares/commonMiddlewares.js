const middleware=function(req,res,next){
    if(!req.headers.isFreeAppUser){
        res.send({error:"the request is missing a mandatory header"})
    }else{
        if(req.headers.isFreeAppUser=="false"){
            req.headers["freeApp"]=false
        }else if(req.headers.isFreeAppUser=="true"){
            req.headers["freeApp"]=true
        }
    }
    next()
}

module.exports.middleware=middleware