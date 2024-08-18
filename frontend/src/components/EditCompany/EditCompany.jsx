import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as companiesService from '../../services/companiesService.js'
import './EditCompany.css'

// TODO: Add validation to form
const EditCompany = () => {
    const navigate = useNavigate()
    const { companyId } = useParams()
    
    const motivationSelect = useRef(null)
    const postingSelect = useRef(null)
    const alumniYes = useRef(null)
    const alumniNo = useRef(null)

    const [updatedCompany, setUpdatedCompany] = useState({
        name: '',
        location: '',
        motivation: 0,
        posting: 0,
        alumni: false
    })

    useEffect(() => {
        const fetchCompany = async () => {
            try {
                const foundCompany = await companiesService.show(companyId)
                if (foundCompany.error) {
                    throw new Error(foundCompany.error)
                } else {
                    setUpdatedCompany(foundCompany)
                    
                    for (let child of motivationSelect.current.children) {
                        if (child.value === foundCompany.motivation.toString()) {
                            child.setAttribute('selected', 'selected')
                        }
                    }

                    for (let child of postingSelect.current.children) {
                        if (child.value === foundCompany.posting.toString()) {
                            child.setAttribute('selected', 'selected')
                        }
                    }

                    if (foundCompany.alumni) {
                        alumniYes.current.checked = true
                    } else {
                        alumniNo.current.checked = true
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchCompany()
    }, [])

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setUpdatedCompany({ ...updatedCompany, name: e.target.value })
                break
            case 'location':
                setUpdatedCompany({ ...updatedCompany, location: e.target.value })
                break
            case 'motivation':
                setUpdatedCompany({ ...updatedCompany, motivation: parseInt(e.target.value) })
                break
            case 'posting':
                setUpdatedCompany({ ...updatedCompany, posting: parseInt(e.target.value) })
                break
            case 'alumni':
                setUpdatedCompany({ ...updatedCompany, alumni: e.target.value === 'yes' ? true : false })
                break
            default:
                break
        }
    }

    const handleSubmit = (e) => {
        companiesService.update(companyId, updatedCompany)
        navigate('/companies')
        navigate(0)
        e.preventDefault()
    }

    return <>
        <div id="update-company">
            <h1>Update Company</h1>
            <form id='update-company-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder='Enter name'
                    value={updatedCompany.name} onChange={handleChange} />
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" placeholder='Enter location'
                    value={updatedCompany.location} onChange={handleChange} />
                <label htmlFor="motivation">How motivated are you to get hired at this company?</label>
                <select name="motivation" onChange={handleChange} ref={motivationSelect}>
                    <option value="0">-- Select Motivation --</option>
                    <option value="1">Not at all</option>
                    <option value="2">Somewhat motivated</option>
                    <option value="3">Pretty motivated</option>
                    <option value="4">Definitely motivated</option>
                    <option value="5">Very motivated</option>
                </select>
                <label htmlFor="posting">Is this company posting jobs?</label>
                <select name="posting" onChange={handleChange} ref={postingSelect}>
                    <option value="0">-- Select Posting --</option>
                    <option value="3">Yes, for a job relevant to me</option>
                    <option value="2">Yes, for a somewhat relevant job</option>
                    <option value="1">No</option>
                </select>
                <label htmlFor="update-alumni-radio-container">Does this company have alumni you can reach out to?</label>
                <div id="update-alumni-radio-container">
                    <div>
                        <input type="radio" name="alumni" id="alumni-yes" value={'yes'}
                            onChange={handleChange} ref={alumniYes} />
                        <label htmlFor="alumni-yes">Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="alumni" id="alumni-no" value={'no'}
                            onChange={handleChange} ref={alumniNo} />
                        <label htmlFor="alumni-no">No</label>
                    </div>
                </div>
                <button type="submit">Update Company</button>
            </form>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    </>
}

export default EditCompany
