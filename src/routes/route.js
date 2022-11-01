const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")

const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/firstapi", UserController.first)

router.get("/secondapi", UserController.second)

router.get("/thirdapi", UserController.third)

router.get("/fourthapi", UserController.fourth)

module.exports = router;