var db = require("../models");

module.exports = function(app) {
    app.get("api/buyers/", function(req, res) {
        db.Images.FindAll({}).then(function(result) {
            res.json(result);
        });
    });
    app.get("/api/sellers/:id", function(req, res) {
        db.Images.FindOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbImage) {
            res.json(dbImage)
        });
    });
    app.post("api/images/", function(req, res) {
        var image = req.body.img_url;
        db.Images.create({
            img_url: image
        })
        .then(function(dbImages) {
            res.json(dbImages);
        });
    });
}