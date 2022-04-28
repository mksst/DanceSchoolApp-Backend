import express from "express"
import UsersController from "../Controllers/UsersController.js"

import { authMiddleware } from "../Middlewares/authMiddleware.js"

const UsersRouter = new express.Router()

UsersRouter.get("/allusers", authMiddleware, UsersController.getAllUsers)
UsersRouter.get("/user:id", authMiddleware, UsersController.getUserById)
UsersRouter.get("/teachers", authMiddleware, UsersController.getTeachers)
UsersRouter.get("/users", authMiddleware, UsersController.getUsers)

export default UsersRouter
