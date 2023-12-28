import mongoose from 'mongoose';

export enum PermissionNames {
    ADMIN   = "ADMIN",
    CLIENT  = "CLIENT",
    BANNED  = "BANNED"
}




const Permission = new mongoose.Schema({
    name: {
        type: String,
        enum: Object.values(PermissionNames),
        required: true,
        trim: true
    }
});


const PermissionModel = mongoose.model('Permission', Permission);
export default PermissionModel;
