const yargs = require("yargs");

const geocode = require("./geocode/geocode.js");
const weather = require("./weather/weather.js");

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (!errorMessage) {
        console.log(results.Address);
        weather.getWeather(results.Latitude , results.Longitude , (errorMessage, weatherResults) => {
            if(!errorMessage)  {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
                return;
            }

            return console.log(errorMessage);
        });
        return;
    }

    return console.log(errorMessage);
});
