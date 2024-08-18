const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

// Create contact for a specific company
const create = async (companyId, formData) => {
    if (formData.linkedIn === '') {
        delete formData.linkedIn
    }
    
    if (formData.email === '') {
        delete formData.email
    }
    
    if (formData.phoneNumber === '') {
        delete formData.phoneNumber
    }
    
    if (formData.currentlyContacting === false) {
        delete formData.initialContactDate
        delete formData.response
    }
    
    try {
        const res = await fetch(`${BASE_URL}/${companyId}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        const newCompany = await res.json()
        return newCompany
    } catch (err) {
        console.log(err)
    }
}

export {
    create
}
