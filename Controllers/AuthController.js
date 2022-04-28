import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../Schemas/User.js"

const generateToken = id => jwt.sign({ id }, "secret", { expiresIn: "24h" })

class AuthController {
  async authenticate(req, res) {
    try {
      const { login, password } = req.body

      const user = await User.findOne({ login })

      !user &&
        res.status(400).json({
          message: "Пользвоатель с таким именем не найден",
        })

      const passwordCompareResult = bcrypt.compareSync(password, user.password)

      !passwordCompareResult &&
        res.status(400).json({
          message: "Неверный пароль",
        })

      const token = generateToken(user._id)

      res.status(200).json({
        user,
        token,
      })
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async getToken(req, res) {
    try {
      const { login, password } = req.body
      res.status(200).json("Все ок")
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }

  async register(req, res) {
    try {
      const { login, password } = req.body

      const candidate = await User.findOne({ login })
      candidate &&
        res
          .status(400)
          .json({ message: "Пользователь с таким логином уже существует!" })

      const hashedPassword = bcrypt.hashSync(password, 5)
      const newUser = await User.create({
        ...req.body,
        password: hashedPassword,
      })

      res.status(200).json({
        message: "Пользователь зарегистрирован",
      })
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }
}

export default new AuthController()
