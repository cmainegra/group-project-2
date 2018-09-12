var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");
var exphbs = require("express-handlebars");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("app listening on PORT:" + PORT )
    });
});



// app.get("/browse", function(req, res))