import express from "express";
import AuthController from "../Controllers/AuthController.js"

const AuthRouter = new express.Router();

AuthRouter.post("/login", AuthController.authenticate)
AuthRouter.get("/token", AuthController.getToken)
AuthRouter.post("/register", AuthController.register)

export default AuthRouter