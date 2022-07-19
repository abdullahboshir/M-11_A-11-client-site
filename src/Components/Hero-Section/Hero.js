import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className='hero-container' id='hero'>
           <div className="hero-caption">
            <h1><span></span><p>Welcome to</p> <br /> < div className='h1'>our Moto Sport</div></h1>
            <h1 className='h2'> Inventory</h1>
            <p>We always try to keep the best bike for you in our collection. so biking is not just a passion, it is a lifestyle. No other joy on the planet can compare the joy of hitting the long winding highways on the bike.</p> <br/>
            <NavLink onClick={() => navigate('/home')}  to="/home" href= "#inventory" className='check'>Check Our Stack</NavLink>
           </div>
           <div className="hero-img">
            <img src='https://i.ibb.co/qJHmC0v/hero-img3.jpg' alt="" />
           </div>
        </div>
    );
};

export default Hero;