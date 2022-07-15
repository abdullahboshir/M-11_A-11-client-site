import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import useSingleService from '../../hooks/useSingleService';

const UpdateStack = () => {
    const {serviceId} = useParams();
    const [service, setServices] = useSingleService(serviceId);
    const [updateQuantity, setUpdateQuantity] = useState(0)
    const { name, img, engine, mileage, price, topSpeed, quantity, brand, maxPower, minPower, stack, _id } = service;

    const handleRestock = async (event) => {
        event.preventDefault();
        // const addQuantity = parseInt(updateQuantity);

       try{
        const url = `http://localhost:5000/products/${serviceId}`;
        console.log('url', url, 'quan', updateQuantity)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({quantity: parseInt(quantity) + parseInt(updateQuantity)})
        })
        .then(res => res.json())
        .then(data => {
            console.log('success', data)
            // event.target.reset()
        })
       }
       catch(error){
        console.log('problem', error)
       }
    }
    return (
        <div className='update-container'>
            <div className="update-img"><img src={img} alt="" /></div>
           <div className="update-info">
           <div>
            <h3>{name}</h3>
                <h5>Brand: {brand}</h5>
                <h6>Engine: </h6><span>{engine}</span>
                <br />
                <h6>Mileage: </h6><span>{mileage}</span>
                <br />
                <h6>Top Speed: </h6><span>{topSpeed}</span>
                <br />
                <h6>Price: </h6><span>{price}</span>
               <div className='stack'>
               <div className='stackAndPrice'><h5>Stack: <span>{stack}</span></h5></div>
                <div className='stackAndPrice'><h5>Quantity: <span>{quantity}</span></h5></div>
              <form onSubmit={handleRestock}>
              <input onChange={(e) => setUpdateQuantity(e.target.value)} value={updateQuantity} type="text" name='stack' placeholder='Stock increase'/>
                <br /> 
                <input className='submit-btn' type='submit' value='RESTOCK' />
              </form>
              
               </div>
            </div>
           </div>
        </div>
    );
};

export default UpdateStack;