import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './manageProduct.css'

const ManageProduct = () => {
    const [services, setServices] = useServices();
    const navigate = useNavigate()
    return (
        <div>
          <div className='manage-container'>
          <h2>Manage Your Inventory</h2>
            <button className='btn btn-primary'>Add a new item</button>
            {
                services.map(service => <div>
                    <div className="mange">
                        <div className="manage-item">
                            <img src={service.img} alt="" />
                            <h6>{service.name}</h6>
                            <p>Price: {service.price}</p>
                            <p>Quantity: {service.quantity}</p>
                        </div>
                        <div className="manage-btn">
                            <button onClick={() => navigate(`/updateStack/${service._id}`)} className='btn btn-info'>INVENTORY</button>
                            <button  className='btn btn-danger'>DELETE</button>

                        </div>
                    </div>
                </div>)
            }
          </div>
        </div>
    );
};

export default ManageProduct;