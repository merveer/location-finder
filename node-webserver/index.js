const express = require("express");
const app = express();

app.set("view engine", "pug");

const main = require("./routes/main");
const about = require("./routes/about");

app.use("/", main);
app.use("/about", about);

app.listen(3000, () => {
    console.log("App is working on 3000");
}); // bind the app to port in our machine
