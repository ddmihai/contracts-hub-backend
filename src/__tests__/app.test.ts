import app from "../app";
import supertest = require("supertest");
const request = supertest(app); 



describe('Testing the app main endpoints case', () => {
    
    test('It should return an object matching messages, status and statusCode', async () => {
        let initialisedWrongEndpoint: string = '/get-some-random-url';
        let res = await request.get(initialisedWrongEndpoint);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe('fail');
        expect(res.body.statusCode).toBe(404);
        expect(res.body.message).toBe("Can't find /get-some-random-url on the server!")
    });


    test('It should return an object matching messages, status and statusCode for POST request', async () => {
        let initialisedWrongEndpoint: string = '/get-some-random-url';
        let res = await request.post(initialisedWrongEndpoint);
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe('fail');
        expect(res.body.statusCode).toBe(404);
        expect(res.body.message).toBe("Can't find /get-some-random-url on the server!")
    });





    test('It should respond with a status of 200 and message of wellcome if the home route is created right', async () => {
        let correctHomeMessage: string = 'Wellcome to contract-r';
        
        let res = await request.get('/');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe(correctHomeMessage);
    });

    
  });
  