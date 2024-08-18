import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav.jsx'
import Home from './components/Home/Home.jsx'
import Companies from './components/Companies/Companies.jsx'
import NewCompany from './components/NewCompany/NewCompany.jsx'
import EditCompany from './components/EditCompany/EditCompany.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import NewContact from './components/NewContact/NewContact.jsx'
import EditContact from './components/EditContact/EditContact.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

const App = () => {
    return <>
        <Nav />
        <main>
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/companies' element={<Companies />} />
               <Route path='/companies/new' element={<NewCompany />} />
               <Route path='/companies/:companyId/edit' element={<EditCompany />} />
               <Route path='/companies/:companyId/contacts' element={<Contacts />} />
               <Route path='/companies/:companyId/contacts/new' element={<NewContact />} />
               <Route path='/companies/:companyId/contacts/:contactId/edit' element={<EditContact />} />
           </Routes>
        </main>
        <Footer />
    </>
}

export default App
