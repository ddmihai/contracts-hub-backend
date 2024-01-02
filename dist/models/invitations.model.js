"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Invitation = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
});
const InvitationModel = mongoose_1.default.model('Invitation', Invitation);
exports.default = InvitationModel;
