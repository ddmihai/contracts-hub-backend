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
exports.initConnectionToDatabase = void 0;
const mongoose_1 = require("mongoose");
const envirnomentVariables_1 = require("../config/envirnomentVariables");
const initConnectionToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!envirnomentVariables_1.databaseURL) {
        throw new Error('Database URL is not defined in the environment variables.');
    }
    try {
        yield mongoose_1.default.connect(envirnomentVariables_1.databaseURL);
        console.log('Connected to the database!');
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
});
exports.initConnectionToDatabase = initConnectionToDatabase;
