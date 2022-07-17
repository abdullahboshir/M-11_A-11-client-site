import React from 'react';
import logo from '../../images/Hero-img/hero-img3.jpg'
const Hero = () => {
    return (
        <div className='hero-container' id='hero'>
           <div className="hero-caption">
            <h1><span></span><p>Welcome to</p> <br /> < div className='h1'>our Moto Sport</div></h1>
            <h1 className='h2'> Inventory</h1>
            <p>We always try to keep the best bike for you in our collection. so biking is not just a passion, it is a lifestyle. No other joy on the planet can compare the joy of hitting the long winding highways on the bike.</p> <br/>
            <button href= '#inventory' className='check'>Check Our Stack</button>
           </div>
           <div className="hero-img">
            <img src={logo} alt="" />
           </div>
        </div>
    );
};

export default Hero;