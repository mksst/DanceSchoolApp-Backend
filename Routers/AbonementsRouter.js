import express from "express"
import AbonementsController from "../Controllers/AbonementsController.js"

import { authMiddleware } from "../Middlewares/authMiddleware.js"

const AbonementsRouter = new express.Router()

AbonementsRouter.get("/abonement", authMiddleware, AbonementsController.getAll)
AbonementsRouter.get(
  "/abonement:id",
  authMiddleware,
  AbonementsController.getByUserID
)
AbonementsRouter.post("/abonement", authMiddleware, AbonementsController.create)
AbonementsRouter.put(
  "/abonement:id",
  authMiddleware,
  AbonementsController.setByID
)
AbonementsRouter.delete(
  "/abonement:id",
  authMiddleware,
  AbonementsController.deleteByID
)

export default AbonementsRouter
