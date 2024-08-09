import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phoneNumber: {
        type: String,
        required: false
    },
    currentlyContacting: {
        type: Boolean,
        required: true
    },
    initialContactDate: {
        type: String,
        required: false
    },
    response: {
        type: Boolean,
        required: false
    },
    fiveDayDate: {
        type: String,
        required: false
    },
    elevenDayDate: {
        type: String,
        required: false
    },
    nextFollowUpDate: {
        type: String,
        required: true
    }
})

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    motivation: {
        type: Number,
        required: true
    },
    posting: {
        type: Number,
        required: true
    },
    alumni: {
        type: Boolean,
        required: true
    },
    contacts: [contactSchema]
})


const Company = mongoose.model('Company', companySchema)
export default Company
