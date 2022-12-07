let axios= require('axios')

const getweatherdata= async function(req,res){
    try{
       let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let weatherofcities=[]
        for(let i=0;i<cities.length;i++){
            let weatherdetail={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c6fa86616c2f75499ba4242afceea994`
            }
            let result=await axios(weatherdetail)
            weatherofcities.push({name:result.data.name,temp:result.data.main.temp})
        }
        let tempofcities=weatherofcities.sort(function(a,b){return a.temp-b.temp})
        return res.status(200).send(tempofcities)
    }
    catch(error){
        return res.status(500).send({error:error.message})
    }
}

module.exports.getweatherdata=getweatherdata
