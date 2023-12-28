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
/**
 *      Auto register
 *          -> This endpoint will be used by the admin when a client will be needed to sign a contract
 *
 */
const registerClientInvitation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send('Client register route invitation...');
    }
    catch (error) {
    }
});
exports.registerClientInvitation = registerClientInvitation;
