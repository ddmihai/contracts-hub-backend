"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodemailerData = exports.userObject = exports.databaseURL = void 0;
const dotenv = require("dotenv");
dotenv.config();
const envirnoment = process.env;
const databaseURL = envirnoment.DATABASE_URL;
exports.databaseURL = databaseURL;
const adminFirstName = envirnoment.ADMIN_FNAME;
const adminLastName = envirnoment.ADMIN_LNAME;
const adminEmail = envirnoment.ADMIN_EMAIL;
const adminPassword = envirnoment.ADMIN_PASSWORD;
const adminNumber = envirnoment.ADMIN_NUMBER;
const nodemailerEmail = envirnoment.NODEMAILER_EMAIL;
const nodemailerPassw = envirnoment.NODEMAILER_PASSWORD;
const nodemailerData = {
    email: nodemailerEmail,
    password: nodemailerPassw
};
exports.nodemailerData = nodemailerData;
const userObject = {
    email: adminEmail,
    password: adminPassword,
    firstName: adminFirstName,
    lastName: adminLastName,
    phone: adminNumber
};
exports.userObject = userObject;
