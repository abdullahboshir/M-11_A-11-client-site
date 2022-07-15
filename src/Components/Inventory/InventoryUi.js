import React from 'react';
import { useNavigate } from "react-router-dom";

const InventoryUi = ({ service }) => {
    const { name, img, engine, mileage, price, topSpeed, quantity, brand, maxPower, minPower, stack, _id } = service;

    const navigate = useNavigate();

    const handleUpdate = id => {
        navigate(`/updateStack/${id}`)
    }

    return (
        <div className='service'>
            <div className='service-img'>
                <img src={img} alt="" />
            </div>
            <div className="service-details">
                <h3>{name}</h3>
                <h5>Brand: {brand}</h5>
                <h6>Max Power:</h6><span>{maxPower}</span>
                <br />
                <h6>Min Power:</h6><span> {minPower}</span>
                <br />
                <h6>Engine: </h6><span>{engine}</span>
                <br />
                <h6>Mileage: </h6><span>{mileage}</span>
                <br />
                <h6>Top Speed: </h6><span>{topSpeed}</span>
                <div className='stackAndPrice'><h5>Price: <span>{price}</span></h5> <h5>Stack: <span>{stack}</span></h5></div>
                <div className='update-btn'>
                    <button className='up-btn' onClick={() => handleUpdate(_id)}
                    >UPDATE</button> <h5>Quantity: <span> {quantity}</span></h5>
                </div>
            </div>
        </div>
    );
};

export default InventoryUi;