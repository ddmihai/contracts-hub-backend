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
exports.sendEmailHTML = void 0;
const nodemailer = require("nodemailer");
const envirnomentVariables_1 = require("../../config/envirnomentVariables");
const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    // secure: true,
    auth: {
        user: envirnomentVariables_1.nodemailerData.email,
        pass: envirnomentVariables_1.nodemailerData.password,
    },
});
const sendEmailHTML = (clientEmail, subject, htmlContent) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: envirnomentVariables_1.nodemailerData.email,
        to: clientEmail,
        subject: subject,
        html: htmlContent,
    };
    transporter.sendMail(mailOptions, error => {
        if (error) {
            console.error("Error sending email", error);
        }
        else {
            console.log("Email sent");
            return "Email sent";
        }
    });
});
exports.sendEmailHTML = sendEmailHTML;
