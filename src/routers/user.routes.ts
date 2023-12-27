import { Router } from "express";
const userRouter = Router();


/**
 *      Import controllers
 *          1.  admin use link to send invitation by email to client
*/
import { registerClientInvitation } from "../controllers/users/registerClientInvitation.controller";
userRouter.post('/auto-register', registerClientInvitation);








export default userRouter;