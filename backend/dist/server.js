"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var https = require("https");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Use default router
server.use(router);

https.createServer(server)
    .listen(3000, function () {
    console.log('JSON Server is running on http://localhost:3000');
});
