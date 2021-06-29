const express = require("express")
const routeExp = express.Router()

const formidable = require('formidable');
const fs = require('fs');
const path = require('path');



routeExp.route('/').get(function (req, res) {
    fs.readFile("./index.html", "UTF-8", function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    });
})

module.exports = routeExp