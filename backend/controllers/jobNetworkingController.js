import express from 'express'
import Company from '../models/companySchema.js'

const APIRouter = express.Router()


APIRouter.get('/', async (req, res) => {
    try {
        const foundCompanies = await Company.find()
        res.status(200).json(foundCompanies)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

APIRouter.post('/', async (req, res) => {
    try {
        const createdCompany = await Company.create(req.body)
        res.status(201).json(createdCompany)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default APIRouter
