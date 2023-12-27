import express, { Express } from 'express';
const app: Express = express();


/**
 *      Basic middleware
*/
app.use(express.json());


app.use('/api/v1', )

export default app;