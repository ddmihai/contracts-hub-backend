import PermissionModel, { PermissionNames } from "../../models/permission.model"

export const automaticallyCreatePermission = async () => {
    let ADMIN = new PermissionModel({ name: PermissionNames.ADMIN });
    let CLIENT = new PermissionModel({ name: PermissionNames.CLIENT });
    let BANNED = new PermissionModel({ name: PermissionNames.BANNED });

    const allPermissions = await PermissionModel.find();
    if (allPermissions.length === 0) {
        await ADMIN.save();
        await CLIENT.save();
        await BANNED.save();
    }    
}