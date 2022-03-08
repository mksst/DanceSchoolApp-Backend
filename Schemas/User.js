import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    login: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    accountType: { type: String, required: true },
})

export const User = mongoose.model("User", UserModel);