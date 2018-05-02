const request = require("request");

const getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/4bea42d8c0cf611b3a73d82e4216d6f0/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature + " °F",
                apparentTemperature: body.currently.apparentTemperature + " °F"
            });
        } else {
            callback("Unable to fetch the weather");
        }
    });
};
module.exports.getWeather = getWeather;
