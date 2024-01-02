"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerClientInvitation = void 0;
const CustomErrorRoute_1 = require("../../errors/CustomErrorRoute");
const fs = require("fs");
const path = require("path");
const nodemailer_1 = require("../../helpers/sendBasicEmials/nodemailer");
const handlebars = require("handlebars"); // Import Handlebars
const invitations_model_1 = require("../../models/invitations.model");
const registerClientInvitation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { clientName, clientEmail, invitationLink } = req.body;
        // get the htmlTemplate path and make it a string
        let hbsTemplatePath = path.join(__dirname, '..', '..', 'views', 'emails', 'invitation.hbs');
        const hbsTemplateContent = yield fs.promises.readFile(hbsTemplatePath, 'utf-8');
        const template = handlebars.compile(hbsTemplateContent);
        // Create an invitation
        const invitation = yield invitations_model_1.default.create({ email: clientEmail });
        const linkEndpointForRegister = req.protocol + '//' + req.get('host') + '/' + invitation._id;
        // const linkEndpointForRegister = req.protocol + '://' + req.get('host') + '/api/v1/invitation-register/' + invitation._id;
        // Data to be populated the HBS and email
        const templateData = {
            title: 'Account invitation',
            clientEmail: clientEmail,
            clientName: clientName,
            content: 'Welcome! We extend our warm invitation for you to create an account on our platform. Your participation in this step is vital as it facilitates the process of document review and signature. By creating an account, you gain access to our platform where you can seamlessly review and sign your documents. Thank you for choosing our platform; we look forward to your participation!',
            invitationLink: linkEndpointForRegister
        };
        const htmlContent = template(templateData);
        if (htmlContent) {
            yield (0, nodemailer_1.sendEmailHTML)(clientEmail, 'Invitation signup', htmlContent);
            res.status(200).json({
                message: 'Invitation sent',
                status: 'Success'
            });
        }
    }
    // Catch the errors
    catch (error) {
        if (error instanceof Error) {
            if (error.message && error.message.split(' ')[0] == 'E11000') {
                return next(new CustomErrorRoute_1.CustomErrorRouteHandler('User already invited', 500, 'failed'));
            }
        }
        console.log(error);
        return next(new CustomErrorRoute_1.CustomErrorRouteHandler('Error while creating an invitation', 500, 'failed'));
    }
});
exports.registerClientInvitation = registerClientInvitation;
