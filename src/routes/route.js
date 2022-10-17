const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// ------------------Problem 1-------------------------------------
router.get('/movies', function(req,res){
    let movies=["Captain America","Game of Thrones","Elite","House of Dragons"]
    res.send(movies)
})
// ------------------Problem 2-------------------------------------
router.get('/movies/:index', function(req,res){
    let movies=["Captain America","Game of Thrones","Elite","House of Dragons"]
    let index=req.params.index
    res.send(movies[index])
})
// ------------------Problem 3-------------------------------------
router.get('/movies/:index', function(req,res){
    let movies=["Captain America","Game of Thrones","Elite","House of Dragons"]
    let index=req.params.index
    if(index>movies.length-1){
        res.send("Error:Use a valid index")
    }else{
        res.send(movies[index]);
    }
})
// ------------------Problem 4-------------------------------------
router.get('/films', function(req,res){
    let films = [
        {
            id : 1,
            name: "The Shining"
        },
        {
            id : 2,
            name: "Game of Thrones"
        },
        {
            id : 3,
            name: "House of Dragons"
        },
        {
            id : 4,
            name: "Elite"
        },
    ]
    res.send(films)
})
// ------------------Problem 5-------------------------------------
router.get('/films/:id', function(req,res){

    let films = [
        {
            id : 1,
            name: "The Shining"
        },
        {
            id : 2,
            name: "Game of Thrones"
        },
        {
            id : 3,
            name: "House of Dragons"
        },
        {
            id : 4,
            name: "Elite"
        },
    ]
    let id= (Number(req.params.id))
    if(id>films.length-1){
        res.send("Error:No movie exist with this id")
    }else{
        res.send(films[id-1])
    }
})

module.exports = router;