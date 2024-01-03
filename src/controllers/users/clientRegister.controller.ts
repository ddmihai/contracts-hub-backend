import { NextFunction, Request, Response } from "express";
import InvitationModel from "../../models/invitations.model";



export const clientSignup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { invitationId } = req.params;
        const { firstName, lastName, email, password, phone } = req.body;
        //the role will be automatically provided in the model

        const invitationChecker = await InvitationModel.findOne({ _id: invitationId });
        if (invitationChecker) 
            return res.render('clients/signup');
        else 
            return res.render('/clients/invalid-invitation');
    } 
    catch (error) {
        res.send(error);
    }
}
