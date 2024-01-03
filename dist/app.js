"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const errorHandler_1 = require("./helpers/app-helpers/errorHandler");
const path = require("path");
const app = express();
/**
 * Basic middlewares init
 * Express handlebars set of static files
 * Static files and CSS modules
*/
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'dist', 'views'));
// Import routes here
const user_routes_1 = require("./routers/user.routes");
// Home route
app.get('/', (req, res, next) => res.status(200).json({ message: 'Wellcome to contract-r' }));
// Use routes here
app.use('/api/v1', user_routes_1.default);
app.get('/api/test', (req, res) => {
    res.status(200).send('testing route');
});
// 404 error...
app.use(errorHandler_1.appErrorNotFoundHandlerHelper);
// App error handler middleware
app.use(errorHandler_1.appErrorHandlerHelper);
exports.default = app;
