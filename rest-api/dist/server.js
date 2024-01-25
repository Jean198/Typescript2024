"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var result = dotenv.config();
if (result.error) {
    console.log('Error loading environment variables, aborting ...');
    process.exit(1);
}
var express = require("express");
var root_1 = require("./routes/root");
var utils_1 = require("./utils");
var app = express();
var setupExpress = function () {
    app.route('/').get(root_1.root);
};
var startServer = function () {
    var port;
    var portEnv = process.env.PORT;
    var portArg = process.argv[2];
    if ((0, utils_1.isInteger)(portEnv)) {
        port = parseInt(portEnv);
    }
    if (!port && (0, utils_1.isInteger)(portArg)) {
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
