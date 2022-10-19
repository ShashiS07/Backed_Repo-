const express = require('express');
const router = express.Router();

let players = [
    {
        name:"manish",
        dob:"1/1/1995",
        gender:"male",
        city:"jalandhar",
        sports:["swimming"]
    },
    {
        name:"lokesh",
        dob:"7/3/1998",
        gender:"male",
        city:"mumbai",
        sports:["football"]
    },
    {
        name:"rohit",
        dob:"8/9/1987",
        gender:"male",
        city:"delhi",
        sports:["cricket"]
    }
]
router.post("/players", function(req,res){
    let newplayer=req.body.newplayer1
    let repeatedname=false;
    for(let i=0;i<players.length;i++){
        if(players[i].name===newplayer.name){
            repeatedname=true;
        }
    }
    if(repeatedname){
        res.send({error:"already exist"})
    }else{
        players.push(newplayer)
        res.send(players)
    }
})


router.get("/sol1",function(req,res){
    let arr=[1,2,3,5,6,7];
    let n=arr[arr.length-1]
    let total=n*(n+1)/2
    let sum=0;
    for(let i=0; i<arr.length;i++){
        sum=sum+arr[i];
    }
    let missing=(total-sum);
    res.send({missingNumber:missing})
})


router.get("/sol2", function(req,res){
    let arr=[33,34,35,37,38,]
    let N=arr.length+1
    let first=arr[0]
    let last=arr[arr.length-1]
    let total=N*(first+last)/2
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    let missingNo=total-sum;
    res.send({missingNumber:missingNo})
})
  
module.exports = router;