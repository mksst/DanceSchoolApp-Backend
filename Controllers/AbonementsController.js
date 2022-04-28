import { Abonement } from "../Schemas/Abonement.js"

class AbonementsController {
  async getAll(req, res) {
    try {
      const abonements = await Abonement.find()

      res.status(200).json(abonements)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async getByUserID(req, res) {
    try {
      const { id } = req.params
      const abonements = await Abonement.findById(id)
      res.status(200).json({ abonements })
    } catch (e) {
      res.status(500).json("Что-то пошло не так", e)
    }
  }

  async create(req, res) {
    try {
      const incomingData = req.body
      const abonement = await Abonement.create({ ...incomingData })

      res.status(201).json(abonement)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async setByID(req, res) {
    try {
      const abonID = req.params
      const abonData = req.body
      const abonement = await Abonement.findByIdAndUpdate(abonID, abonData, {
        new: true,
      })

      res.status(200).json(abonement)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }

  async deleteByID(req, res) {
    try {
      const abonID = req.params
      const abonement = await Abonement.findByIdAndDelete(abonID)
      res.status(200).json(abonement)
    } catch (e) {
      res.status(500).json({
        message: "Что-то пошло не так",
        error: e,
      })
    }
  }
}

export default new AbonementsController()
