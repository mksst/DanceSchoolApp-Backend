import express from "express"
import TrainingsController from "../Controllers/TrainingsController.js"

import { authMiddleware } from "../Middlewares/authMiddleware.js"

const TrainingsRouter = new express.Router()

TrainingsRouter.get("/trainings", authMiddleware, TrainingsController.getAll)
TrainingsRouter.get(
  "/trainings:id",
  authMiddleware,
  TrainingsController.getByTrainingID
)
TrainingsRouter.post("/trainings", authMiddleware, TrainingsController.create)
TrainingsRouter.put(
  "/trainings:id",
  authMiddleware,
  TrainingsController.setByID
)
TrainingsRouter.delete(
  "/trainings:id",
  authMiddleware,
  TrainingsController.deleteByID
)

export default TrainingsRouter
