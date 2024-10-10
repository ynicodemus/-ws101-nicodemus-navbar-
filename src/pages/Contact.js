import './Contact.css'
import { Link } from "react-router-dom"

export default function Contact() {
    return (
    <div className="register">
        <p id='h3'>Register Now</p>

            <input type='text' id="usn" placeholder='Enter your Username'></input> <br/>
            <input type='text' id='pass' placeholder='Enter your Password'></input> <br/> <br/>
            <Link to='#'><span>Sign In</span></Link>


        <div className='contact'>
            <p id='h3'>Contact Us</p>

            <Link to='#' id='social'>ⓕ</Link>
            <Link to='#' id='social'>🅾</Link>
            <Link to='#' id='social'>☎︎</Link>

        </div>

    </div>

)
}