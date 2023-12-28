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
exports.automaticallyCreatePermission = void 0;
const permission_model_1 = require("../../models/permission.model");
const automaticallyCreatePermission = () => __awaiter(void 0, void 0, void 0, function* () {
    let ADMIN = new permission_model_1.default({ name: permission_model_1.PermissionNames.ADMIN });
    let CLIENT = new permission_model_1.default({ name: permission_model_1.PermissionNames.CLIENT });
    let BANNED = new permission_model_1.default({ name: permission_model_1.PermissionNames.BANNED });
    const allPermissions = yield permission_model_1.default.find();
    if (allPermissions.length === 0) {
        yield ADMIN.save();
        yield CLIENT.save();
        yield BANNED.save();
    }
});
exports.automaticallyCreatePermission = automaticallyCreatePermission;
