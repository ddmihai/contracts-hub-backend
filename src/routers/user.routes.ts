import { Router } from "express";
const userRouter = Router();


/**
 *      Import controllers
 *          1.  admin use link to send invitation by email to client
*/
import { registerClientInvitation } from "../controllers/users/registerClientInvitation.controller";
userRouter.route('/invitation-register').post(registerClientInvitation);








export default userRouter;