"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("node:http");
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end("Helló itt a szerever!");
});
server.listen(3000, function () {
    console.log("The server is running on http://localhost:3000");
});
