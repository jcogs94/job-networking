import express from 'express'
import Company from '../models/companySchema.js'

const contactsRouter = express.Router()


// Update
contactsRouter.get('/', async (req, res) => {
    try {
        const foundCompanies = await Company.find()
        res.status(200).json(foundCompanies)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default contactsRouter
