const express = require('express');
const router = express.Router();
const authorController=require("../controllers/authorController")
const BookController= require("../controllers/bookController")


router.post("/createauthor",authorController.createAuthor)

router.post("/createBook", BookController.createBook  )

router.get("/getbookbyid",BookController.getbookbyid)

router.get("/updatepricebook",BookController.getupdateprice)

router.get("/bookspricebetween", BookController.pricebetween)

module.exports = router;