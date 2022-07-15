import React from 'react';
import logo from '../../images/Hero-img/hero-img3.jpg'
const Hero = () => {
    return (
        <div className='hero-container'>
           <div className="hero-caption">
            <h1><span></span><p>Welcome to our</p> <br /> < div className='h1'>Moto Sport Center</div></h1>
            <h2>We always try to keep the best bike for you in our collection</h2>
           </div>
           <div className="hero-img">
            <img src={logo} alt="" />
           </div>
        </div>
    );
};

export default Hero;