import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as companiesService from '../../services/companiesService.js'
import ContactCard from './ContactCard/ContactCard.jsx'
import './Contacts.css'

const Contacts = () => {
    const [company, setCompany] = useState({ contacts: [] })
    let { companyId } = useParams()
    
    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const foundCompany = await companiesService.show(companyId)
                if (foundCompany.error) {
                    throw new Error(foundCompany.error)
                } else {
                    setCompany(foundCompany)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchCompany()
    }, [])
    
    return <>
        <div id="view-contacts">
            <div id="view-contacts-header">
                <h1>Contacts</h1>
                <p>{company.name}</p>
            </div>
            <div id="contact-card-container">
                {company.contacts.map((contact, index) => (
                    <ContactCard key={`contact ${index+1}`} contact={contact} />
                ))}
            </div>
        </div>
    </>
}

export default Contacts
