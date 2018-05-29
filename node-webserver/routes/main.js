const express = require("express");
var app = express();
const axios = require("axios");
const router = express.Router();
let zone = "";

router.post("/", function(req, res){
    console.log(req.body.city);
    const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${req.body.city}`;

    axios.get(geocodeUrl).then((response) => {
        if (response.data.status === "ZERO_RESULTS") {
            console.log("Unable to find address");
        }
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        let weatherUrl = `https://api.darksky.net/forecast/6b5ea77a0f2665a3f2802f223e18a8f3/${lat},${lng}`;

        weatherUrl = weatherUrl.concat("?units=ca&exclude=minutely, hourly");

        zone = response.data.results[0].formatted_address;
        return axios.get(weatherUrl); // chain calls together
    }).then((response) => { // called when the weather data comes back
        let temperature = response.data.currently.temperature;
        const apparentTemperature = response.data.currently.temperature;
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);

        const data = {
            city : zone,
            temp: temperature,
        };
        res.send(data);
    })
        .catch((e) => {
            if(e.code === "ENOTFOUND") {
                return console.log("Unable to connect API Servers");
            }
            console.log(e.message);
        });
});
module.exports = router;
