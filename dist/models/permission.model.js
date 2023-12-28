"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionNames = void 0;
const mongoose_1 = require("mongoose");
var PermissionNames;
(function (PermissionNames) {
    PermissionNames["ADMIN"] = "ADMIN";
    PermissionNames["CLIENT"] = "CLIENT";
    PermissionNames["BANNED"] = "BANNED";
})(PermissionNames || (exports.PermissionNames = PermissionNames = {}));
const Permission = new mongoose_1.default.Schema({
    name: {
        type: String,
        enum: Object.values(PermissionNames),
        required: true,
        trim: true
    }
});
const PermissionModel = mongoose_1.default.model('Permission', Permission);
exports.default = PermissionModel;
