const request = require("request");

const geocodeAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address);

    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (err, response, body) => {
        if (err || body.status === "ZERO_RESULTS") {
            callback("Unable to find the address");
        } else if (body.status === "OK") {
            callback(undefined, {
                Address: body.results[0].formatted_address,
                Latitude: body.results[0].geometry.location.lat,
                Longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
