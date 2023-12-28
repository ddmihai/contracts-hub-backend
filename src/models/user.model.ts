import mongoose, { Schema } from 'mongoose';
import hashPassword from '../helpers/hashPassword';
import PermissionModel from './permission.model';

const userSchema = new mongoose.Schema({
    email: {
        unique: true,
        type: String,
        required: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true
    },

    firstName: {
        type: String,
        trim: true,
        required: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true
    },

    role: {
        type: Schema.Types.ObjectId,
        ref: PermissionModel
    }
});



const UserModel = mongoose.model('User', userSchema);
export default UserModel;
