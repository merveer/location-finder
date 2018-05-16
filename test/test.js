const test = require("ava");
const request = require("supertest");
const app = require("../node-webserver/server.js");

test.cb("Page is working", function (t) {
    request(app)
        .get("/")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200);
    t.end();
});

test.cb("Internal Server Error", function (t) {
    request(app)
        .get("/")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(500)
        .end(function (err) {
            if (err) return(err);
            t.end();
        });
});

test.cb("Page is not found", function (t) {
    request(app)
        .get("/404")
        .expect("Content-Type", /json/)
        .expect(404)
        .expect("\"Page not found\"")
        .end(function (err) {
            if (err) return(err);
            t.end();
        });
});
