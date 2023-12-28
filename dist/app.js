"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const errorHandler_1 = require("./helpers/app-helpers/errorHandler");
const app = express();
// Basic middlewares init
app.use(express.json());
// Import routes here
const user_routes_1 = require("./routers/user.routes");
// Home route
app.use('/', (req, res, next) => res.status(200).json({ message: 'Wellcome to contract-r' }));
// Use routes here
app.use('/api/v1', user_routes_1.default);
// App 404 error handler route
app.all('*', errorHandler_1.appErrorNotFoundHandlerHelper);
// App error handler middleware
app.use(errorHandler_1.appErrorHandlerHelper);
exports.default = app;
