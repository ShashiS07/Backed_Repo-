const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")
const BookModel= require("../models/bookModel")


router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/getBookByYear", BookController.getBookByYear)

router.get("/getPerticularBooks", BookController.getPerticularBooks)

router.get("/getIndianBooks", BookController.getIndianBooks)

router.get("/getrandombooks", BookController.getrandombooks)

module.exports = router;