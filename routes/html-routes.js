var path = require("path");
var db = require("../models");
var images = require("../models/post.js")

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("Index");
    });
    app.get("/BuySell.html", function(req, res) {
        db.Images.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(img_url) {
   res.render("BuySell", { img_url : img_url });
        })        
    });
    app.get("/Login.html", function(req, res) {
        res.render("Login");
    })
}