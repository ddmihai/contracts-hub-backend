import mongoose from 'mongoose';
import { databaseURL } from '../config/envirnomentVariables';



export const initConnectionToDatabase = async () => {
    if (!databaseURL) {
        throw new Error('Database URL is not defined in the environment variables.');
    }

    try {
        await mongoose.connect(databaseURL);
        console.log('Connected to the database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};
