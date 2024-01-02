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
const envirnomentVariables_1 = require("../../config/envirnomentVariables");
const hashPassword_1 = require("../hashPassword");
const permission_model_1 = require("../../models/permission.model");
const user_model_1 = require("../../models/user.model");
/**
 *  1. Get the existing users if there are any
 *  2. Get the roles if there are any
 *
 *  if there is no user, and the roles are populated, than hash the password from the env and create the user
 * @returns {false} if there is a user already in the database
 *
 */
const createAdminAccount = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield user_model_1.default.findOne({ email: 'sasdaniel9@gmail.com' });
        const roles = yield permission_model_1.default.findOne({ name: 'ADMIN' });
        if (envirnomentVariables_1.userObject.password) {
            let hashPassword = yield (0, hashPassword_1.default)(envirnomentVariables_1.userObject.password);
            // If the admin is not created, save the user into the database .... : .... else return and breake the function...ex
            if (!existingUser && roles && hashPassword) {
                const user = new user_model_1.default({
                    email: envirnomentVariables_1.userObject.email,
                    password: hashPassword,
                    firstName: envirnomentVariables_1.userObject.firstName,
                    lastName: envirnomentVariables_1.userObject.lastName,
                    phone: envirnomentVariables_1.userObject.phone,
                    role: roles._id
                });
                return yield user.save();
            }
            // If there is already a user established in the database, than return false
            else
                return false;
        }
        // If the user is not inside the env file -> than is not an admin and return false
        else
            return false;
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = createAdminAccount;
