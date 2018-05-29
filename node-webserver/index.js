const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const main = require("./routes/main.js");

app.use("/", main);

app.post("/", function(req, res) {
    var city = req.body.city;
    res.send(city);
});

app.listen(3000, () => {
    console.log("App is working on 3000");
}); // bind the app to port in our machine
