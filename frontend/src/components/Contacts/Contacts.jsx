import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as companiesService from '../../services/companiesService.js'
import './Contacts.css'

const Contacts = () => {
    const [company, setCompany] = useState()
    let { companyId } = useParams([])

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
        <h1>{company.name}</h1>
    </>
}

export default Contacts
