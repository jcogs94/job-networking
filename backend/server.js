import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import methodOverride from 'method-override'
import APIRouter from './controllers/jobNetworkingController.js'

const PORT = 3000

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB...')
})

app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))

app.use('/job-networking-api', APIRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
