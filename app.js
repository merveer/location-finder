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

console.log(argv);

request({
    url: "http://maps.googleapis.com/maps/api/geocode/json?address=cankaya",
    json:true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

