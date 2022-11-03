const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const Middleware=require("../middleware/middleware")



router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

router.get("/users/:userId",Middleware.middleware, userController.getUserData)

router.put("/users/:userId",Middleware.middleware, userController.updateUser)

router.delete("/users/:userId",Middleware.middleware, userController.deleteuser)

module.exports = router;