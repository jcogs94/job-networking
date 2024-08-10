import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import companyRouter from './controllers/companyController.js'
import contactsRouter from './controllers/contactsController.js'

const PORT = 3000

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB...')
})

app.use(cors())
app.use(express.json())

app.use('/job-networking-api', companyRouter)
app.use('/job-networking-api/:companyId/contacts', contactsRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
