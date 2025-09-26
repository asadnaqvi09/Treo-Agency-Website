import express from 'express'
import cors from 'cors'
import connectDB from './config/db_config.js'
import dotenv from 'dotenv'
const app = express()
const PORT = 3000

// Middleware
app.use(express.json())
app.use(cors())

dotenv.config()
connectDB()

app.use('/api/quote', quoteRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})