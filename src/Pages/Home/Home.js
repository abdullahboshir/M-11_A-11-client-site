import React from 'react';
import './home.css'
import Hero from '../../Components/Hero-Section/Hero';
import Inventory from '../../Components/Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Inventory/>
        </div>
    );
};

export default Home;