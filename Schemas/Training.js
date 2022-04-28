import mongoose from "mongoose";

const TrainingModel = new mongoose.Schema({
    date: { type: String, required: true },
    teacherID: { type: String, required: true },
    teacherName: { type: String, required: true },
    trainingTypes: { type: Array, required: true },
    places: { type: Number, required: true },
    availablePlaces: { type: Number, required: true },
    users: { type: Array, required: true },
})

export const Training = mongoose.model("Training", TrainingModel);