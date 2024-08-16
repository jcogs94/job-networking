import './ContactCard.css'

const ContactCard = ({ contact }) => {
    return <>
        <div className="contact-card">
            <h2>{contact.name}</h2>
        </div>
    </>
}

export default ContactCard
