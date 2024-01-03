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
exports.clientSignup = void 0;
const invitations_model_1 = require("../../models/invitations.model");
const clientSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { invitationId } = req.params;
        const { firstName, lastName, email, password, phone } = req.body;
        //the role will be automatically provided in the model
        const invitationChecker = yield invitations_model_1.default.findOne({ _id: invitationId });
        if (invitationChecker)
            return res.render('clients/signup');
        else
            return res.render('/clients/invalid-invitation');
    }
    catch (error) {
        res.send(error);
    }
});
exports.clientSignup = clientSignup;
