import { Link } from 'react-router-dom'
import './CompanyCard.css'

const CompanyCard = ({ company }) => {
    return <>
        <div className="company-card">
            <h2>{company.name}</h2>
            <p>{company.location}</p>
            <ul className="company-card-details">
                <li><b>Motivation:</b> {company.motivation}</li>
                <li><b>Posting:</b> {company.posting}</li>
                <li><b>Alumni:</b> {company.alumni ? 'Yes' : 'No'}</li>
                <li><b>Contacts:</b> {company.contacts.length}</li>
            </ul>
            <div className="contact-buttons">
                <button><Link to={`/companies/`}>View Contacts</Link></button>
                <button><Link to={`/companies/`}>Add Contact</Link></button>
            </div>
        </div>
    </>
}

export default CompanyCard
