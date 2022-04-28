import express from "express"
import AuthController from "../Controllers/AuthController.js"

import { authMiddleware } from "../Middlewares/authMiddleware.js"

const AuthRouter = new express.Router()

AuthRouter.post("/login", AuthController.authenticate)
AuthRouter.get("/token", authMiddleware, AuthController.getToken)
AuthRouter.post("/register", AuthController.register)

export default AuthRouter
