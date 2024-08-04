const request = require("request");

const openWeatherMap = {
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY:"81d3747115a38fd03c6ae084e4efdd8a",
}

const weatherData = (address, callback) =>{
    const url = openWeatherMap.BASE_URL+encodeURIComponent(address)+ "&APPID=" + openWeatherMap.SECRET_KEY;
    console.log(url);
    request({url , json:true},(error,data)=>{
        if(error){
            callback(true, "not able to fetch :( "+error);
        }
        callback(false,data?.body);
    })
}

module.exports = weatherData;