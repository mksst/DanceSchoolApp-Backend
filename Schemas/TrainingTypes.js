import mongoose from "mongoose"

const TrainingTypesModel = new mongoose.Schema({
  name: { type: String, required: true },
})

export const TrainingTypes = mongoose.model("TrainingTypes", TrainingTypesModel)
