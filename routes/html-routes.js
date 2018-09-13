var path = require("path");
var images = require("../models/post.js")

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("Index");
    });
    app.get("/BuySell.html", function(req, res) {
        res.render("BuySell");
    });
    app.get("/Login.html", function(req, res) {
        res.render("Login");
    })
}