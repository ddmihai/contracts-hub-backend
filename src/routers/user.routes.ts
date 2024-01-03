import { Router } from "express";
const userRouter = Router();


/**
 *      Import controllers
 *          1.  admin use link to send invitation by email to client
*/          
import { registerClientInvitation } from "../controllers/users/registerClientInvitation.controller";
import { clientSignup } from "../controllers/users/clientRegister.controller";


userRouter.route('/invitation-register').post(registerClientInvitation);
userRouter.route('/create-account/:invitationId').get(clientSignup);







export default userRouter;