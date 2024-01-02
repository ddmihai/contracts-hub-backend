import { NextFunction, Request, Response } from "express";
import { CustomErrorRouteHandler } from "../../errors/CustomErrorRoute";
import * as fs from 'fs';
import path = require("path");
import { sendEmailHTML } from "../../helpers/sendBasicEmials/nodemailer";
import * as handlebars from 'handlebars'; // Import Handlebars
import InvitationModel from "../../models/invitations.model";
import { log } from "console";



export const registerClientInvitation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { clientName, clientEmail } = req.body;   

        // get the htmlTemplate path and make it a string
        let hbsTemplatePath = path.join(__dirname, '..', '..', 'views', 'emails', 'invitation.hbs');
        const hbsTemplateContent = await fs.promises.readFile(hbsTemplatePath, 'utf-8');
        const template = handlebars.compile(hbsTemplateContent);

        // Create an invitation
        const invitation = await InvitationModel.create({ email: clientEmail });
        const linkEndpointForRegister = req.protocol + '//' + req.get('host') + '/' + invitation._id
        // const linkEndpointForRegister = req.protocol + '://' + req.get('host') + '/api/v1/invitation-register/' + invitation._id;

        // Data to be populated the HBS and email
        const templateData = { 
            title:              'Account invitation',
            clientEmail:        clientEmail, 
            clientName:         clientName, 
            content:            'Welcome! We extend our warm invitation for you to create an account on our platform. Your participation in this step is vital as it facilitates the process of document review and signature. By creating an account, you gain access to our platform where you can seamlessly review and sign your documents. Thank you for choosing our platform; we look forward to your participation!',
            invitationLink:     linkEndpointForRegister
        };

        const htmlContent = template(templateData);


        if (htmlContent) {
            await sendEmailHTML(clientEmail, 'Invitation signup', htmlContent);
            res.status(200).json({
                message: 'Invitation sent',
                status: 'Success'
            });  
        } 
    } 

    // Catch the errors
    catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message && error.message.split(' ')[0] == 'E11000') {
                return next(new CustomErrorRouteHandler('User already invited', 500, 'failed'));
            }
        }

        console.log(error);
        return next(new CustomErrorRouteHandler('Error while creating an invitation', 500, 'failed'));
    }
}