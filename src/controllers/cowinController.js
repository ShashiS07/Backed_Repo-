let axios = require("axios");

const getbydistrict= async function(req,res){
    try{
        let district_id= req.query.district_id
        let date=req.query.date
        let options={
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result=await axios(options)
        let data=result.data
        return res.status(200).send({data:data})
    }
    catch(error){
        res.status(500).send({error: error.message})
    }
}

module.exports.getbydistrict = getbydistrict