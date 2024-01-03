import { NextFunction, Request, Response } from "express";



export const clientSignup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.render('/clients/signup');
    } 
    catch (error) {
        res.send(error);
    }
}
