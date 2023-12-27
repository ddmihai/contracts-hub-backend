import { Request, Response } from "express";


/**
 *      Auto register
 *          -> This endpoint will be used by the admin when a client will be needed to sign a contract 
 * 
 */
export const registerClientInvitation = async (req: Request, res: Response) => {
    try {
        res.send('Client register route invitation...')    
    } 
    catch (error) {
        
    }
}