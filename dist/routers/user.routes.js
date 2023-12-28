"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
/**
 *      Import controllers
 *          1.  admin use link to send invitation by email to client
*/
const registerClientInvitation_controller_1 = require("../controllers/users/registerClientInvitation.controller");
userRouter.post('/auto-register', registerClientInvitation_controller_1.registerClientInvitation);
exports.default = userRouter;
