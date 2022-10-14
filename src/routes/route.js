const express = require('express');
const router = express.Router();
let first= require('../logger/logger.js')
let second= require('../util/helper')
let third = require('../validator/formatter')
const underscore = require('underscore')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
   
    console.log(first.welcomefirst())
    console.log(second.current_date())
    console.log(second.getmonth())
    console.log(second.getbatchinfo());
    console.log(third.writesomething());
    console.log(third.changetolowercase());
    console.log(third.changetouppercase());
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    let montharr=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
       let final= lodash.chunk(montharr, 4 )
    console.log(final);
    

    let oddarr=[1,3,5,7,9,11,13,14,15,17]
    let result= lodash.tail(oddarr);
    console.log(result);
    res.send('My first ever api!')

    let arr=[1,2,3,3,2];
    let finalresult=lodash.union(5,arr);
    console.log(finalresult);

    let newarr=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter","Island"],["fantasy","Pans Labyrinth"]]
    let pair=lodash.fromPairs(newarr);
    console.log(pair);

});

module.exports = router;

