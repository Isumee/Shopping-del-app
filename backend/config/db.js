import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://isumeeliv:801833605135591mdzs@cluster0.c1p9t.mongodb.net/cloth-del').then(()=>console.log("DB Connected"));
}