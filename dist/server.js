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
const app_1 = require("./app");
const http = require("http");
// Import connection to db functions and helpers to start at the start of the server
const connection_1 = require("./database/connection");
const createPermissions_1 = require("./helpers/serverStartupFunctions/createPermissions");
const createAdmin_1 = require("./helpers/serverStartupFunctions/createAdmin");
const port = process.env.PORT || 3001;
const server = http.createServer(app_1.default);
server.on('listening', () => console.log('Server online ' + port));
server.on('error', (error) => console.log(error));
const handleStartServer = () => __awaiter(void 0, void 0, void 0, function* () {
    server.listen(port);
    yield (0, connection_1.initConnectionToDatabase)();
    yield (0, createPermissions_1.automaticallyCreatePermission)();
    yield (0, createAdmin_1.default)();
});
// Start the server
handleStartServer();
