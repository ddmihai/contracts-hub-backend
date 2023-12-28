"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorRouteHandler = void 0;
class CustomErrorRouteHandler extends Error {
    constructor(message, statusCode, status) {
        super(message);
        this.statusCode = statusCode;
        this.status = status;
    }
}
exports.CustomErrorRouteHandler = CustomErrorRouteHandler;
