import { User } from "../Schemas/User.js"

class UsersController {
  async getAllUsers(req, res) {
    try {
      const users = await User.find()
      res.status(200).json(users)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async getUserById(req, res) {
    try {
      const { userid } = req.params
      const user = await User.findById(userid)
      !user &&
        res.status(400).json({
          message: "Пользвоатель с таким идентификатором не найден.",
        })
      res.status(200).json(user)
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }

  async getTeachers(req, res) {
    try {
      const users = await User.find()
      !users.length &&
        res.status(400).json({
          message: "Пользователей не найдено.",
        })
      const teachers = users.filter(user => +user.accountType === 1)
      !teachers &&
        res.status(400).json({
          message: "Преподавателей не найдено.",
        })
      res.status(200).json(teachers)
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }

  async getUsers(req, res) {
    try {
      const users = await User.find()
      !users.length &&
        res.status(400).json({
          message: "Пользователей не найдено.",
        })
      const onlyUsers = users.filter(user => +user.accountType === 0)
      !onlyUsers &&
        res.status(400).json({
          message: "Пользователей не найдено.",
        })
      res.status(200).json(onlyUsers)
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }
}

export default new UsersController()
