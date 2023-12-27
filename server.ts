import app from "./app";
import http from 'http';


// Import connection to db functions and helpers to start at the start of the server
import { initConnectionToDatabase } from "./src/database/connection";
import { automaticallyCreatePermission } from "./src/serverStartupFunctions/createPermissions";
import createAdminAccount from "./src/serverStartupFunctions/createAdmin";


const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.on('listening', () => console.log('Server online'));
server.on('error', error => console.log(error));



const handleStartServer = async () => {
    server.listen(port);

    await initConnectionToDatabase();
    await automaticallyCreatePermission();
    await createAdminAccount();
}




// Start the server
handleStartServer();