const express = require('express');
const router = express.Router();
const commonmiddleware=require("../middlewares/commonMiddlewares")
const userController=require("../controllers/userController")
const productController=require("../controllers/productController")
const orderController=require("../controllers/orderController")



router.post("/createuser",commonmiddleware.middleware, userController.createuser)

router.post("/createproduct", productController.createproduct)

router.post("/createorder",commonmiddleware.middleware, orderController.createorder)

module.exports = router;