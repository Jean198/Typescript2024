"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = void 0;
var root = function (req, res) {
    res.status(200).send('<h1>Express server running</h1>');
};
exports.root = root;
