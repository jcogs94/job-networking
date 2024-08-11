import { Link } from 'react-router-dom'
import './CompanyCard.css'

const CompanyCard = ({ company }) => {
    return <>
        <div className="company-card">
            <h2>{company.name}</h2>
            <p>{company.location}</p>
            <ul className="company-card-details">
                <li><b>Motivation:</b> {company.motivation}</li>
                <li><b>Hiring:</b> {
                        company.posting === 1 ? 'No' : null
                    }{
                        company.posting === 2 ? 'Yes, for a somewhat relevant job' : null
                    }{
                        company.posting === 3 ? 'Yes, for a job relevant to me' : null
                    }</li>
                <li><b>Alumni:</b> {company.alumni ? 'Yes' : 'No'}</li>
                <li><b>Contacts:</b> {company.contacts.length}</li>
            </ul>
            <div className="contact-buttons">
                {company.contacts.length > 0
                    ? <button><Link to={`/companies/`}>View Contacts</Link></button>
                    : null}
                <button><Link to={`/companies/`}>Add Contact</Link></button>
            </div>
        </div>
    </>
}

export default CompanyCard
