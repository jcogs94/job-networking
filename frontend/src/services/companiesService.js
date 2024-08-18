const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`

// Returns all companies
const index = async () => {
    try {
        const res = await fetch(BASE_URL)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Returns a specific company
const show = async (id) => {
    try {
        const res = await fetch(`${BASE_URL}/${id}`)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

// Create a new company
const create = async (formData) => {
    console.log('create ran...');
    
    try {
        const res = await fetch(BASE_URL, {
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
    index, show, create
}
