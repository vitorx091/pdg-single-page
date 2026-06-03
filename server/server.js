import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import connectDB from "./src/config/db.js"
import eventRoutes from "./src/routes/eventRoutes.js"

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/events", eventRoutes)

app.get("/", (req, res) => {
  res.send("PDG API RUNNING")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})