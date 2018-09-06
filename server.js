var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var app = express();
var PORT = process.env.PORT || 8080;
var server = http.createServer(handleRequest);

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

function handleRequest(req, res) {
    app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
};

server.listen(PORT, function() {
    console.log("server listening port" + PORT);
});

// app.get("/browse", function(req, res))