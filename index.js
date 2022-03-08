import express from "express"
import cors from "cors"
import mongoose from "mongoose"

//Routers
import AuthRouter from "./Routers/AuthRouter.js"

const port = "5000"
const db_url =
  "mongodb+srv://dance:dance@dancecluster.0srcg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", AuthRouter)

const startApp = async () => {
  try {
    await mongoose.connect(db_url)
    app.listen(port, () => console.log("server started"))
  } catch (error) {
    console.error(error)
  }
}

startApp()
