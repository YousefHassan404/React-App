import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    imageUrl:String,
    email: { type: String, unique: true },
    password:String,
    mobileNumber: String,
    age: String,
    country: String,
    gender: String,
},{timestamps:true});


export const User=mongoose.model("user",UserSchema);
