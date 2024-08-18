import { useNavigate } from 'react-router-dom'
import './CompanyCard.css'

const CompanyCard = ({ company }) => {
    const navigate = useNavigate()
    
    const handleClickView = () => {
        navigate(`/companies/${company._id}/contacts`)
    }
    
    const handleClickAdd = () => {
        navigate(`/companies/${company._id}/contacts/new`)
    }
    
    const handleClickEdit = () => {
        navigate(`/companies/${company._id}/edit`)
    }

    let motivationStars = ''
    for (let i = 1; i < 6; i++) {
        if (company.motivation >= i) {
            motivationStars += '★'
        } else {
            motivationStars += '☆'
        }
    }
    
    return <>
        <div className="company-card">
            <h2>{company.name}</h2>
            <p>{company.location}</p>
            <ul className="company-card-details">
                <li><b>Motivation:</b> {motivationStars}</li>
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
            <div className="company-card-buttons">
                {company.contacts.length > 0
                    ? <button onClick={handleClickView}>View Contacts</button>
                    : <button onClick={handleClickAdd}>Add Contact</button>}
                <button onClick={handleClickEdit}>Edit Company</button>
            </div>
        </div>
    </>
}

export default CompanyCard
