const app = require("express")();
const express = require("express");
const bodyParser = require("body-parser");
const http = require("http").Server(app);

const router = express.Router();

router.get("/", function(req, res){
    res.render("about");
});

module.exports = router;
