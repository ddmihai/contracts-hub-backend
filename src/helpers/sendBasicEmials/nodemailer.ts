import * as nodemailer from 'nodemailer';
import { nodemailerData } from '../../config/envirnomentVariables';


const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    // secure: true,
    auth: {
      user: nodemailerData.email,
      pass: nodemailerData.password,
    },
});

export const sendEmailHTML = async (clientEmail: string, subject: string, htmlContent: string) => {
    const mailOptions = {
        from:       nodemailerData.email,
        to:         clientEmail,
        subject:    subject,
        html:       htmlContent,
    };

    transporter.sendMail(mailOptions, error => {
        if (error) {
          console.error('Error sending email', error);
          return 'Error sending email';
        } 
        else {
          return 'Email sent';
        }
    });
}


