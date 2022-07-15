import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephoneForward } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineYahoo } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import './footer.css'

const Footer = () => {
    const navigate = useNavigate();

    const checkoutNavigate = () => {
        navigate("/checkout");
    }

    const blogsnavigate = () => {
        navigate("/blogs");
    }

    const aboutnavigate = () => {
        navigate("/about");
    }
    const loginnavigate = () => {
        navigate("/login");
    }

    const homenavigate = () => {
        navigate("/home");
    }

    return (
       <footer>
        <div className="footer-container">
            <div className="footer-items">
                <div className='item brand-item-p'>
                    <h3>TRAVEL SENSE</h3>
                    <p>It's  time  for  a  new journey</p>
                    </div>
                <div className='item'>
                    <h5>NAVIGATION</h5>
                    <NavLink to="/home" onClick={homenavigate} href= "#slider">Home</NavLink>
                    <NavLink to="/checkout" onClick={checkoutNavigate} href= "#checkout">Checkout</NavLink>
                    <NavLink to="/blogs" onClick={blogsnavigate} href= "#blog">Blogs</NavLink>
                    <NavLink to="/about" onClick={aboutnavigate} href= "#about">About</NavLink>
                    <NavLink to="/login" onClick={loginnavigate} href= "#login">Login</NavLink>
                    </div>
                <div className='item'> 
                    <h5>COMPANY</h5>
                   <p>About Us</p>
                   <p>Clients</p>
                   <p>Safety</p>
                   <p>Support</p>
                   <p>Schedule</p>
                    </div>
                <div className='item'>
                   <h5>CONTACT US</h5>
                    <p> <HiOutlineLocationMarker className='icon'/> 914 Nathan Courts Suite 632</p>
                    <p> <BsTelephoneForward className='icon'/> +1-924-552-4346 </p>
                    <p> <HiOutlineMail className='icon'/> ralph48@hotmail.com</p>
                    <p> <AiOutlineYahoo className='icon'/> ralph48@yahoo.com</p>
                    </div>
            </div>
            <hr />
            <div className="footer-social">
                <div className="social">
                    < AiFillFacebook className='social-icon'/>
                    < AiOutlineTwitter className='social-icon'/>
                    < AiFillInstagram className='social-icon'/>
                    < AiFillYoutube className='social-icon'/>
                    </div>
                <div className="social-caption"><small>Copyright &copy; 
                    {new Date().getFullYear()} Travel Sense <span className='line' /> <span>Privecy Policy</span>
                    </small></div>
            </div>
        </div>
       </footer>
    );
};

export default Footer;