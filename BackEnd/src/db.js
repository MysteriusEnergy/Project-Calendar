import mongoose from 'mongoose';

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/task_manager');
        console.log("DB is connected");
    } catch(error){
        console.log("Error",error);
    }
}