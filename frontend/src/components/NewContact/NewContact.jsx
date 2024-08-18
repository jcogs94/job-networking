import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { show as getCompany } from '../../services/companiesService.js'
import { create as createContact } from '../../services/contactsService.js'
import './NewContact.css'

const NewContact = () => {
    const navigate = useNavigate()
    const { companyId } = useParams()

    const [companyName, setCompanyName] = useState('')
    const [newContact, setNewContact] = useState({
        name: '',
        linkedIn: '',
        email: '',
        phoneNumber: '',
        currentlyContacting: false,
        initialContactDate: '',
        response: false
    })

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const foundCompany = await getCompany(companyId)
                if (foundCompany.error) {
                    throw new Error(foundCompany.error)
                } else {
                    setCompanyName(foundCompany.name)
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchCompany()
    }, [])

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setNewContact({ ...newContact, name: e.target.value })
                break
            case 'linkedIn':
                setNewContact({ ...newContact, linkedIn: e.target.value })
                break
            case 'email':
                setNewContact({ ...newContact, email: e.target.value })
                break
            case 'phoneNumber':
                setNewContact({ ...newContact, phoneNumber: e.target.value })
                break
            case 'currentlyContacting':
                setNewContact({
                    ...newContact,
                    currentlyContacting: e.target.value === 'yes' ? true : false,
                    response: e.target.value === 'yes' ? newContact.response : false,
                    initialContactDate: e.target.value === 'yes' ? newContact.initialContactDate : ''
                })
                break
            case 'response':
                setNewContact({ ...newContact, response: e.target.value === 'yes' ? true : false })
                break
            case 'initialContactDate':
                setNewContact({ ...newContact, initialContactDate: e.target.value })
                break
            default:
                break
        }
    }

    const handleSubmit = (e) => {
        createContact(companyId, newContact)
        navigate(`/companies/${companyId}/contacts`)
        navigate(0)
        e.preventDefault()
    }
    
    return <>
        <div id="new-contact">
            <div id="new-contact-heading">
                <h1>New Contact</h1>
                <p>{companyName}</p>
            </div>
            <form id='new-contact-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder='Enter name'
                    value={newContact.name} onChange={handleChange} />
                <label htmlFor="linkedIn">LinkedIn:</label>
                <input type="text" name="linkedIn" placeholder='Enter LinkedIn'
                    value={newContact.linkedIn} onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" placeholder='Enter email'
                    value={newContact.email} onChange={handleChange} />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" name="phoneNumber" placeholder='Enter phone number'
                    value={newContact.phoneNumber} onChange={handleChange} />
                <label htmlFor="currently-contacting-radio-container">Are you currently contacting this person?</label>
                <div id="currently-contacting-radio-container">
                    <div>
                        <input type="radio" name="currentlyContacting" id="currently-contacting-yes" value={'yes'}
                            onChange={handleChange} />
                        <label htmlFor="currently-contacting-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="currentlyContacting" id="currently-contacting-no" value={'no'}
                            onChange={handleChange} />
                        <label htmlFor="currently-contacting-no">No</label>
                    </div>
                </div>
                {newContact.currentlyContacting ? <>
                        <label htmlFor="response-radio-container">Have they responded?</label>
                        <div id="response-radio-container">
                            <div>
                                <input type="radio" name="response" id="response-yes" value={'yes'}
                                    onChange={handleChange} />
                                <label htmlFor="response-yes">Yes</label>
                            </div>
                            <div>
                                <input type="radio" name="response" id="response-no" value={'no'}
                                    onChange={handleChange} />
                                <label htmlFor="response-no">No</label>
                            </div>
                        </div>
                        <label htmlFor="initialContactDate">When did you first contact them?</label>
                        <input type="date" name="initialContactDate" onChange={handleChange} />
                    </> : null
                }
                <button type="submit">Create Contact</button>
            </form>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    </>
}

export default NewContact
