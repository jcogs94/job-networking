import { useEffect, useState } from 'react'
import * as companiesService from '../../services/companiesService.js'
import './Companies.css'
import CompanyCard from './CompanyCard/CompanyCard'

const Companies = () => {
    const [allCompanies, setAllCompanies] = useState([])

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
        </div>
    </>
}

export default Companies
