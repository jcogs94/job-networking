import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as companiesService from '../../services/companiesService.js'
import CompanyCard from './CompanyCard/CompanyCard'
import './Companies.css'

const Companies = () => {
    const [allCompanies, setAllCompanies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const allCompanies = await companiesService.index();
                if (allCompanies.error) {
                    throw new Error(allCompanies.error)
                } else {
                    setAllCompanies(allCompanies)
                }
            } catch (error) {
                console.log(error)                
            }
        }

        fetchCompanies()
    }, [])
    
    return <>
        <div id="companies">
            <h1>Companies</h1>
            {allCompanies.map((company, index) => (
                <CompanyCard key={`company ${index+1}`} company={company} />
            ))}
            <button onClick={() => nagivate('/companies/new')}>Add Company</button>
        </div>
    </>
}

export default Companies
