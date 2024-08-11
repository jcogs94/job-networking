import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return <>
        <div id="home">
            <h1>Job Networking</h1>
            <button><Link to='/companies'>View Companies</Link></button>
        </div>
    </>
}

export default Home
