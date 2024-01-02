import * as express from 'express';
import { appErrorHandlerHelper, appErrorNotFoundHandlerHelper } from './helpers/app-helpers/errorHandler';
import path = require('path');


const app: express.Express = express();


/**
 * Basic middlewares init
 * Express handlebars set of static files
 * Static files and CSS modules
*/     
app.use(express.json());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));



// Import routes here
import userRouter from './routers/user.routes';









// Home route
app.get('/', (req, res, next) => res.status(200).json({ message: 'Wellcome to contract-r' }));

// Use routes here
app.use('/api/v1', userRouter);

app.get('/api/test', (req, res) => {
    res.status(200).send('testing route')
});


// 404 error...
app.use(appErrorNotFoundHandlerHelper);

// App error handler middleware
app.use(appErrorHandlerHelper);





export default app;