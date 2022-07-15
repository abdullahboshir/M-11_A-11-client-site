import React from 'react';
import useServices from '../../hooks/useServices';
import InventoryUi from './InventoryUi';
import './inventory.css'

const Inventory = () => {
    const [services, setServices] = useServices();
    return (
        <div className='services-container'>
            <div className='bg'>
            <h2>Check our Inventory</h2>
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