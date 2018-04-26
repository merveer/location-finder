const request = require("request");
const yargs = require("yargs");

const argv = yargs // obj that stores final parsed output
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "Address to fetch weather for",
            string: true
        }
    })
    .help()
    .alias("help", "h")
    .argv;

var encodedAddress = encodeURIComponent(argv.a);

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json:true
}, (error, response, body) => {
    if(error){
        console.log("Unable to conect google servers");
    }
    else if(body.status === "ZERO_RESULTS") {
        console.log("Unable to find address ");
    } else if(body.status === "OK") {
        console.log("Here is address details");
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});

