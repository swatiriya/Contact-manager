import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()

app.use(express.urlencoded({
  extended: true,
  limit: "16kb"
}))

app.use(cors({
  origin: process.env.NODE_ENV === 'prod' ? "https://vanish-xj7x.onrender.com" : "http://localhost:5173",
  optionsSuccessStatus: 200,
  credentials: true
}))

app.use(cookieParser())


app.use(express.json(
  { limit: "40kb" }
))

//Routes
import userRoute from './routes/user.route.js'
import chatRouter from './routes/chat.routes.js'
import friendRouter from './routes/friend.routes.js'
import { contactRouter } from './routes/contact.routes.js'
app.use("/api/v1/users", userRoute)
app.use("/api/v1/chat", chatRouter)
app.use("/api/v1/friend", friendRouter)
app.use("/api/v1/contacts", contactRouter)

const __dirname1 = path.resolve()

if (process.env.NODE_ENV == 'prod') { //easily serve frontend via single backend
  app.use(express.static(path.join(__dirname1, "/Client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "Client", "dist", "index.html"));
  })
} else {
  app.get("/", (req, res) => {
    res.send("Api running successfully")
  })
}


export default app
