"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appErrorHandlerHelper = exports.appErrorNotFoundHandlerHelper = void 0;
const CustomErrorRoute_1 = require("../../errors/CustomErrorRoute");
const appErrorNotFoundHandlerHelper = (req, res, next) => {
    const err = new CustomErrorRoute_1.CustomErrorRouteHandler(`Can't find ${req.originalUrl} on the server!`, 404, 'fail');
    next(err);
};
exports.appErrorNotFoundHandlerHelper = appErrorNotFoundHandlerHelper;
const appErrorHandlerHelper = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    res.status(error.statusCode).json({
        status: error.status.toLowerCase(),
        statusCode: error.statusCode,
        message: error.message
    });
};
exports.appErrorHandlerHelper = appErrorHandlerHelper;
