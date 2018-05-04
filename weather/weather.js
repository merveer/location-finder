const request = require("request");

const getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/2f7b1061bf35a572f6051ebff7485e45/${lat},${lng}`,
        json: true,
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature + " °F",
                apparentTemperature: body.currently.apparentTemperature + " °F"
            });
        } return callback("Unable to fetch the weather");
    });
};
module.exports.getWeather = getWeather;
