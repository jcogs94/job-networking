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

// Update contact
contactsRouter.put('/:contactId', async (req, res) => {
    try {
        let foundCompany = await Company.findById(req.companyId)
        
        if (!foundCompany) {
            res.status(404)
            throw new Error('Company not found.')
        } else {
            for (let i = 0; i < foundCompany.contacts.length; i++) {
                if (foundCompany.contacts[i]._id.toString() === req.params.contactId) {
                    let updateKeys = Object.keys(req.body)
                    updateKeys.forEach((key) => {
                        if (key === 'initialContactDate') {
                            // TODO: if not same as current, update numbered days from initialContact
                        } else {
                            foundCompany.contacts[i][key] = req.body[key]
                        }
                    })
                }
            }

            foundCompany.save()
            res.status(200).json(foundCompany)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// Delete contact
contactsRouter.delete('/:contactId', async (req, res) => {
    try {
        const foundCompany = await Company.findById(req.companyId)
        
        if (!foundCompany) {
            res.status(404)
            throw new Error('Company not found.')
        } else {
            for (let i = 0; i < foundCompany.contacts.length; i++) {
                if (foundCompany.contacts[i]._id.toString() === req.params.contactId) {
                    foundCompany.contacts.splice(i, 1)
                }
            }

            foundCompany.save()
            res.status(200).json(foundCompany)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default contactsRouter
