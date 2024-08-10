import express from 'express'
import Company from '../models/companySchema.js'

const companyRouter = express.Router()


// Index
companyRouter.get('/', async (req, res) => {
    try {
        const foundCompanies = await Company.find()
        res.status(200).json(foundCompanies)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Create
companyRouter.post('/', async (req, res) => {
    try {
        const createdCompany = await Company.create(req.body)
        res.status(201).json(createdCompany)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Show
companyRouter.get('/:companyId', async (req, res) => {
    try {
        const foundCompany = await Company.findById(req.params.companyId)
        
        if (!foundCompany) {
            res.status(404)
            throw new Error('Company not found.')
        } else {
            res.status(200).json(foundCompany)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Update
companyRouter.put('/:companyId', async (req, res) => {
    try {
        const foundCompany = await Company.findByIdAndUpdate(req.params.companyId, req.body)
        
        if (!foundCompany) {
            res.status(404)
            throw new Error('Company not found.')
        } else {
            res.status(200).json(foundCompany)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Delete
companyRouter.delete('/:companyId', async (req, res) => {
    try {
        const foundCompany = await Company.findByIdAndDelete(req.params.companyId)
        
        if (!foundCompany) {
            res.status(404)
            throw new Error('Company not found.')
        } else {
            res.status(200).json(foundCompany)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default companyRouter
