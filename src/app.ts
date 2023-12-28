import * as express from 'express';
import { appErrorHandlerHelper, appErrorNotFoundHandlerHelper } from './helpers/app-helpers/errorHandler';

const app: express.Express = express();


// Basic middlewares init
app.use(express.json());


// Import routes here
import userRouter from './routers/user.routes';


// Use routes here
app.use('/api/v1', userRouter);










// App 404 error handler route
app.all('*', appErrorNotFoundHandlerHelper);

// App error handler middleware
app.use(appErrorHandlerHelper);



export default app;