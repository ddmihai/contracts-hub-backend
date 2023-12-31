import * as dotenv from 'dotenv';
import { ProcessEnv } from '../interfaces/DoeEnvInterfaces';
dotenv.config();


const envirnoment: ProcessEnv = process.env;
const databaseURL: string | undefined = envirnoment.DATABASE_URL;


const adminFirstName:   string | undefined = envirnoment.ADMIN_FNAME;
const adminLastName:    string | undefined = envirnoment.ADMIN_LNAME;
const adminEmail:       string | undefined = envirnoment.ADMIN_EMAIL;
const adminPassword:    string | undefined = envirnoment.ADMIN_PASSWORD;
const adminNumber:      string | undefined = envirnoment.ADMIN_NUMBER;


const nodemailerEmail:  string | undefined = envirnoment.NODEMAILER_EMAIL;
const nodemailerPassw:  string | undefined = envirnoment.NODEMAILER_PASSWORD;

const nodemailerData = {
    email:      nodemailerEmail,
    password:   nodemailerPassw
}


const userObject = {
    email :     adminEmail,
    password :  adminPassword,
    firstName : adminFirstName,
    lastName :  adminLastName,
    phone :     adminNumber
}




export {
    databaseURL, userObject, nodemailerData
}

