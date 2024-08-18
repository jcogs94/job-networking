import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { create as createCompany } from '../../services/companiesService.js'
import './NewCompany.css'

// TODO: Add validation to form
const NewCompany = () => {
    const navigate = useNavigate()
    const [newCompany, setNewCompany] = useState({
        name: '',
        location: '',
        motivation: 0,
        posting: 0,
        alumni: false
    })

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setNewCompany({ ...newCompany, name: e.target.value })
                break
            case 'location':
                setNewCompany({ ...newCompany, location: e.target.value })
                break
            case 'motivation':
                setNewCompany({ ...newCompany, motivation: parseInt(e.target.value) })
                break
            case 'posting':
                setNewCompany({ ...newCompany, posting: parseInt(e.target.value) })
                break
            case 'alumni':
                setNewCompany({ ...newCompany, alumni: e.target.value === 'yes' ? true : false })
                break
            default:
                break
        }
    }

    const handleSubmit = (e) => {
        createCompany(newCompany)
        navigate('/companies')
        navigate(0)
        e.preventDefault()
    }
    
    return <>
        <div id="new-company">
            <h1>New Company</h1>
            <form id='new-company-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder='Enter name'
                    value={newCompany.name} onChange={handleChange} />
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" placeholder='Enter location'
                    value={newCompany.location} onChange={handleChange} />
                <label htmlFor="motivation">How motivated are you to get hired at this company?</label>
                <select name="motivation" onChange={handleChange} defaultValue={'0'}>
                    <option value="0">-- Select Motivation --</option>
                    <option value="1">Not at all</option>
                    <option value="2">Somewhat motivated</option>
                    <option value="3">Pretty motivated</option>
                    <option value="4">Definitely motivated</option>
                    <option value="5">Very motivated</option>
                </select>
                <label htmlFor="posting">Is this company posting jobs?</label>
                <select name="posting" onChange={handleChange} defaultValue={'0'}>
                    <option value="0">-- Select Posting --</option>
                    <option value="3">Yes, for a job relevant to me</option>
                    <option value="2">Yes, for a somewhat relevant job</option>
                    <option value="1">No</option>
                </select>
                <label htmlFor="alumni-radio-container">Does this company have alumni you can reach out to?</label>
                <div id="alumni-radio-container">
                    <div>
                        <input type="radio" name="alumni" id="alumni-yes" value={'yes'}
                            onChange={handleChange} />
                        <label htmlFor="alumni-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="alumni" id="alumni-no" value={'no'}
                            onChange={handleChange} />
                        <label htmlFor="alumni-no">No</label>
                    </div>
                </div>
                <button type="submit">Create Company</button>
            </form>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    </>
}

export default NewCompany
