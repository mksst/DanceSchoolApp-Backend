import express from "express"
import TrainingTypesController from "../Controllers/TrainingTypesController.js"

import { authMiddleware } from "../Middlewares/authMiddleware.js"

const TrainingTypesRouter = new express.Router()

TrainingTypesRouter.get(
  "/trainingtypes",
  authMiddleware,
  TrainingTypesController.getTrainingTypes
)
TrainingTypesRouter.post(
  "/addtrainingtype",
  authMiddleware,
  TrainingTypesController.addTrainingType
)

export default TrainingTypesRouter
