import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const UpdateStack = () => {
    const {serviceId} = useParams();
    const [service, setServices] = useState({});
    const [updateQuantity, setUpdateQuantity] = useState(0)
    const { name, img, engine, mileage, price, topSpeed, quantity, brand, maxPower, minPower, stack, _id } = service;


    useEffect(() => {
        fetch(`http://localhost:5000/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [service, serviceId]);


    const handleRestock = (event) => {
        event.preventDefault();
        const newQuantity = parseInt(updateQuantity) + parseInt(quantity);
        const updateQuan = newQuantity;
        console.log(newQuantity)


            fetch(`http://localhost:5000/products/${serviceId}`, {
                method: 'PUT',
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({quantity: updateQuan})
            })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                alert('user added successfully')
                event.target.reset();
            })
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