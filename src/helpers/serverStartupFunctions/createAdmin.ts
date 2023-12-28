import { userObject } from "../../config/envirnomentVariables";
import hashPasswordFunc from "../hashPassword";
import PermissionModel from "../../models/permission.model";
import UserModel from "../../models/user.model";

/**
 *  1. Get the existing users if there are any 
 *  2. Get the roles if there are any
 * 
 *  if there is no user, and the roles are populated, than hash the password from the env and create the user
 * @returns {false} if there is a user already in the database
 * 
 */
const createAdminAccount = async () => {
    try {
        const existingUser = await UserModel.findOne({ email: 'sasdaniel9@gmail.com' });
        const roles = await PermissionModel.findOne({ name: 'ADMIN' });
        
        
        if (userObject.password) {
            let hashPassword = await hashPasswordFunc(userObject.password);

            // If the admin is not created, save the user into the database .... : .... else return and breake the function...ex
            if (!existingUser && roles && hashPassword) {
                
                const user = new UserModel({
                    email:      userObject.email,
                    password:   hashPassword,
                    firstName:  userObject.firstName,
                    lastName:   userObject.lastName,
                    phone:      userObject.phone,
                    role:       roles._id 
                });

                return await user.save();
            }
        }
        else return false;
    } 
    catch (error) {
        console.error(error);
    }
}

export default createAdminAccount;