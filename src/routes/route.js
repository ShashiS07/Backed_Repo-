const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productcontroller=require("../controllers/productcontroller")
const ordercontroller=require("../controllers/ordercontroller")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post("/createproduct",productcontroller.createProduct)

router.post("/createUser",commonMW.mid1, UserController.createUser)

router.post("/createorder",commonMW.mid1,ordercontroller.createOrder)



module.exports = router;