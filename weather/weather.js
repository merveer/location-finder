const request = require("request");

const getWeather = (lat, lng, cb) => {
    request({
        url: `https://api.darksky.net/forecast/2f7b1061bf35a572f6051ebff7485e45/${lat},${lng}`,
        json: true,
    }, (err, response, body) => {
        if (err || response.statusCode === 404 ) return console.log("Unable to fetch the weather");

        const temperature = `${body.currently.temperature} °F`;
        const apparentTemperature = `${body.currently.apparentTemperature} °F"`;
        cb (null, { temperature, apparentTemperature });
    });
};

module.exports.getWeather = getWeather;
