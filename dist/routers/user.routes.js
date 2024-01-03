"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
/**
 *      Import controllers
 *          1.  admin use link to send invitation by email to client
*/
const registerClientInvitation_controller_1 = require("../controllers/users/registerClientInvitation.controller");
const clientRegister_controller_1 = require("../controllers/users/clientRegister.controller");
userRouter.route('/invitation-register').post(registerClientInvitation_controller_1.registerClientInvitation);
userRouter.route('/create-account/').get(clientRegister_controller_1.clientSignup);
exports.default = userRouter;
