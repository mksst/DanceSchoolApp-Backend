import { Training } from "../Schemas/Training.js"

class TrainingsController {
  async getAll(req, res) {
    try {
      const trainings = await Training.find()

      res.status(200).json(trainings)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async getByTrainingID(req, res) {
    try {
      const { id } = req.params
      const trainings = await Training.findById(id)
      res.status(200).json({ abonements })
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }

  async create(req, res) {
    try {
      const incomingData = req.body
      const trainings = await Training.create({ ...incomingData })

      res.status(201).json(trainings)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async setByID(req, res) {
    try {
      const trainingID = req.params
      const trainingData = req.body
      const trainings = await Training.findByIdAndUpdate(
        trainingID,
        trainingData,
        {
          new: true,
        }
      )

      res.status(200).json(trainings)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async deleteByID(req, res) {
    try {
      const trainingID = req.params
      const trainings = await Training.findByIdAndDelete(trainingID)
      res.status(200).json(trainings)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }
}

export default new TrainingsController()
