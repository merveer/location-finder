const express = require("express");
const pug = require("pug");
const fs = require("fs");

const app = express();

app.set("view engine", "pug");  // set pug as view engine

app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}, method: ${req.method}, url: ${req.path}`;

    fs.appendFile("server.log" , log + "\n", (err) => {
        if (err) console.log("File wasnt appended");
    });
    next();
});

app.get("/", (req, res) => { // set up a handler for HTTP req
    res.render("index.pug", {
        currentYear: new Date().getFullYear()
    });
});

app.get("/about", (req, res) => { // set up a handler for HTTP req
    res.render("about.pug", {
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log("App is working on 3000");
}); // bind the app to port in our machine
