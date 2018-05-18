const express = require("express");
const axios = require("axios");
const yargs = require("yargs");
const router = express.Router();
let zone = "";

router.get("/", function(req, res){
    const encodedAddress = encodeURIComponent("istanbul");
    const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

    axios.get(geocodeUrl).then((response) => {
        if(response.data.status === "ZERO_RESULTS"){
            throw new Error("Unable to find this address");
        }
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;
        const weatherUrl = `https://api.darksky.net/forecast/2f7b1061bf35a572f6051ebff7485e45/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        zone = response.data.results[0].formatted_address;
        return axios.get(weatherUrl); // chain calls together
    }).then((response) => { // called when the weather data comes back
        let temperature = response.data.currently.temperature;
        const apparentTemperature = response.data.currently.temperature;
        console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
        res.render("index",{
            temp: temperature,
            city: zone,
            currentYear: new Date().getFullYear()
        });
    }).catch((e) => {
        if(e.code === "ENOTFOUND") {
            return console.log("Unable to connect API Servers");
        }
        console.log(e.message);
    });
});

module.exports = router;
