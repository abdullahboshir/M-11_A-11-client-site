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

    const handleaboutMe = () => {
        navigate("/aboutMe");
    }

    const handleBlogs = () => {
        navigate("/blogs");
    }

    const handleAddProduct = () => {
        navigate("/addProduct");
    }
    const handleManageProduct = () => {
        navigate("/manageProduct");
    }

    const handleHome = () => {
        navigate("/home");
    }

    return (
       <footer>
        <div className="footer-container">
            <div className="footer-items">
                <div className='item brand-item-p'>
                    <h3>MOTO SPORT</h3>
                    <p>Exclusive Collection</p>
                    </div>
                <div className='item'>
                    <h5>NAVIGATION</h5>
                    <NavLink to="/home" onClick={handleHome} href= "#hero">Home</NavLink>
                    <NavLink to="/blogs" onClick={handleBlogs} href= "#blog">Blogs</NavLink>
                    <NavLink to="/aboutMe" onClick={handleaboutMe} href= "#about">About Me</NavLink>
                    <NavLink to="/addProduct" onClick={handleAddProduct} href= "#add">Add Product</NavLink>
                    <NavLink to="/manageProduct" onClick={handleManageProduct} href= "#manage">Manage Product</NavLink>
                    </div>
                <div className='item'> 
                    <h5>COMPANY</h5>
                   <p>About Us</p>
                   <p>Clients</p>
                   <p>Safety</p>
                   <p>Support</p>
                   <p>Services</p>
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
                    {new Date().getFullYear()} Moto Sport <span className='line' /> <span>Privecy Policy</span>
                    </small></div>
            </div>
        </div>
       </footer>
    );
};

export default Footer;