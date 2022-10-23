const express = require('express');
const router = express.Router();
const BookModel= require("../models/userModel.js")
const BookController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", BookController.createbookdata  )

router.get("/getBooksData", BookController.getbooksData)

module.exports = router;