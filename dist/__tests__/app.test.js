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
const app_1 = require("../app");
const supertest = require("supertest");
const request = supertest(app_1.default);
describe('Testing the app main endpoints case', () => {
    test('It should return an object matching messages, status and statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        let initialisedWrongEndpoint = '/get-some-random-url';
        let res = yield request.get(initialisedWrongEndpoint);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe('fail');
        expect(res.body.statusCode).toBe(404);
        expect(res.body.message).toBe("Can't find /get-some-random-url on the server!");
    }));
    test('It should return an object matching messages, status and statusCode for POST request', () => __awaiter(void 0, void 0, void 0, function* () {
        let initialisedWrongEndpoint = '/get-some-random-url';
        let res = yield request.post(initialisedWrongEndpoint);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe('fail');
        expect(res.body.statusCode).toBe(404);
        expect(res.body.message).toBe("Can't find /get-some-random-url on the server!");
    }));
    test('It should respond with a status of 200 and message of wellcome if the home route is created right', () => __awaiter(void 0, void 0, void 0, function* () {
        let correctHomeMessage = 'Wellcome to contract-r';
        let res = yield request.get('/');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe(correctHomeMessage);
    }));
});
