import test from "ava";
import request from "supertest";
import app from "../node-webserver/server.js";

test.cb("Mainpage is working", function (t) {
    request(app)
        .get("/")
        .expect("Content-Type", "text/html; charset=utf-8")
        .expect(200)
        .end(function (err,res) {
            if(err) throw (err);
            t.end();
        });
});

