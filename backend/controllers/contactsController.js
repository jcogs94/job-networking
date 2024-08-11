import express from 'express'
import Company from '../models/companySchema.js'

const contactsRouter = express.Router()


// Create new contact
contactsRouter.post('/', async (req, res) => {
    try {
        let foundCompany = await Company.findById(req.companyId)
        
        if (!foundCompany) {
            res.status(404)
            throw new Error('Company not found.')
        } else {
            let newContact = req.body

            if (!newContact.linkedIn) {
                newContact.linkedIn = 'none'
            }

            if (!newContact.email) {
                newContact.email = 'none'
            }

            if (!newContact.phoneNumber) {
                newContact.phoneNumber = 'none'
            }

            if (!newContact.initialContactDate) {
                newContact.initialContactDate = 'none'
                newContact.elevenDayDate = 'none'
                newContact.fiveDayDate = 'none'
                newContact.nextFollowUpDate = 'none'
            } else {
                // TODO: use "initialContactDate" to make a five, eleven, and nextFollowUp day date
            }

            if (!newContact.response) {
                newContact.response = false
            }

            foundCompany.contacts.push(newContact)
            foundCompany.save()
            
            res.status(200).json(foundCompany)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default contactsRouter
