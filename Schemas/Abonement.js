import mongoose from "mongoose";

const AbonementModel = new mongoose.Schema({
    userID: { type: String, required: true },
    name: { type: String, required: true },
    expiration: { type: String, required: true },
    workoutCount: { type: Number, required: true },
    amount: { type: Number, required: true },
})

export const Abonement = mongoose.model("Abonement", AbonementModel);