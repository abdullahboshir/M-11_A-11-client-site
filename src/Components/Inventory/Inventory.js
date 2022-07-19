import React from 'react';
import useServices from '../../hooks/useServices';
import InventoryUi from './InventoryUi';
import './inventory.css'

const Inventory = () => {
    const [services, setServices] = useServices();
    return (
        <div className='services-container' id='inventory'>
            <div className='bg'>
            <h2>our Inventory</h2>
            </div>
            <div className="services">
            {
                services.map(service => <InventoryUi 
                    key={service._id} 
                    service = {service}
                    />)
            }
            </div>
        </div>
    );
};

export default Inventory;