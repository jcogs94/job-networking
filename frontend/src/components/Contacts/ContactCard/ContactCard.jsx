import './ContactCard.css'

const ContactCard = ({ contact }) => {
    return <>
        <div className="contact-card">
            <h2>{contact.name}</h2>
            {contact.currentlyContacting
                ? <div className="currently-contacting">
                    <h3>Currently Contacting</h3>
                    <p><em>{contact.response ? 'Responded' : 'No Response'}</em></p>
                    <ul>
                        <li><b>First Contacted:</b> {contact.initialContactDate}</li>
                        <li><b>5 Day Follow-up:</b> {contact.fiveDayDate}</li>
                        <li><b>11 Day Follow-up:</b> {contact.fiveDayDate}</li>
                    </ul>
                    <p><b>Next: </b>{contact.nextFollowUpDate}</p>
                  </div>
                : <div className="not-currently-contacting">
                    <h3>Not Currently Contacting</h3>
                  </div>
            }
            <ul>
                <li><b>LinkedIn:</b> {
                    contact.linkedIn === 'none'
                        ? 'none'
                        : <a href={contact.linkedIn}>here</a>
                }</li>
                <li><b>Phone Number:</b> {contact.phoneNumber}</li>
                <li><b>Email:</b> {contact.email}</li>
            </ul>
        </div>
    </>
}

export default ContactCard
