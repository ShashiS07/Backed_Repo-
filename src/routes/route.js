const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memeController")

router.get("/cowin/getbydistrict", CowinController.getbydistrict)

router.get("/weather/gettemp", WeatherController.getweatherdata)

router.post("/meme/editmeme", MemeController.editmeme)

module.exports = router;