import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav.jsx'
import Home from './components/Home/Home.jsx'
import Companies from './components/Companies/Companies.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

const App = () => {
    return <>
        <Nav />
        <main>
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/companies' element={<Companies />} />
               <Route path='/companies/:companyId/contacts' element={<Contacts />} />
           </Routes>
        </main>
        <Footer />
    </>
}

export default App
