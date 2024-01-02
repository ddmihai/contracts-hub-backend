import mongoose from 'mongoose';


const Invitation = new mongoose.Schema({

    createdAt: {
        type:       Date,
        default:    Date.now 
    },
        
    email: {
        type:       String,
        required:   true,
        trim:       true,
        unique:     true
    }
});


const InvitationModel = mongoose.model('Invitation', Invitation);
export default InvitationModel;
