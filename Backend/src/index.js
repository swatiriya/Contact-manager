import connectDB from "./db/connectDB.js";
import dotenv from 'dotenv'
import { serverInstance } from "./commServer/server.js";
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, '../.env')

})


await connectDB()
  .then(() => {
    try {
      serverInstance()
    } catch (error) {
      console.log(`Error running at port ${process.env.PORT}`)
    }
  })
  .catch((err) => {
    console.log("Error while connecting to database", err)
  })


