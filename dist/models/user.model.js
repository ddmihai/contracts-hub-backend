"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const permission_model_1 = require("./permission.model");
const userSchema = new mongoose_1.default.Schema({
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: permission_model_1.default
    }
});
const UserModel = mongoose_1.default.model('User', userSchema);
exports.default = UserModel;
