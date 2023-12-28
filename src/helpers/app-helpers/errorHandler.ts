import { NextFunction, Request, Response } from "express";
import { CustomErrorRouteHandler } from "../../errors/CustomErrorRoute";


export const appErrorNotFoundHandlerHelper = (req: Request, res: Response, next: NextFunction) => {
    const err = new CustomErrorRouteHandler(`Can't find ${req.originalUrl} on the server!`, 404, 'fail');
    next(err);
};


export const appErrorHandlerHelper = (error: any, req: Request, res: Response, next: NextFunction) => {
    error.statusCode = error.statusCode || 500;
    error.status     = error.status || 'error';
    res.status(error.statusCode).json({
        status:         error.status.toLowerCase(),
        statusCode:     error.statusCode,
        message:        error.message
    });
}