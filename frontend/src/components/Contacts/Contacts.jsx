import { Routes, Route, useParams } from 'react-router-dom'
import './Contacts.css'

const Contacts = () => {
    let { companyId } = useParams()
    
    return <>
        <h1>{companyId}</h1>
    </>
}

export default Contacts
