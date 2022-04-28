import { TrainingTypes } from "../Schemas/TrainingTypes.js"

class TrainingTypesController {
  async getTrainingTypes(req, res) {
    try {
      const types = TrainingTypes.find()
      res.status(200).json(types)
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }

  async addTrainingType(req, res) {
    try {
      const { name } = req.body
      const candidate = await TrainingTypes.findOne({ name })
      candidate &&
        res.status(400).json({ message: "Тип занятия уже существует!" })

      const newType = await TrainingTypes.create({
        ...req.body,
      })
      res.status(200).json(newType)
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }
}

export default new TrainingTypesController()
