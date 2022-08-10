import {Link} from "react-router-dom";
import '../App.css'

const Home = () => {
    return <div className='signInHome'>
        <h1>Home</h1>
        <div >
            <Link to="/sign-in">Sign in</Link>
        </div>
        <div>
            <Link to="/sign-up">Sign up</Link>
        </div>

    </div>
}

export default Home