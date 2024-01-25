"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var root_1 = require("./routes/root");
var utils_1 = require("./utils");
var app = express();
var setupExpress = function () {
    app.route('/').get(root_1.root);
};
var startServer = function () {
    var portArg = process.argv[2];
    var port;
    if ((0, utils_1.isInteger)(portArg)) {
        port = parseInt(portArg);
    }
    if (!port) {
        port = 9000;
    }
    app.listen(port, function () {
        console.log("Server running at port http://localhost:".concat(port));
    });
};
setupExpress();
startServer();
