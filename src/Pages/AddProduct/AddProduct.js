import React, { useState } from 'react';
import './addProduct.css';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [max, setMax] = useState("");
    const [min, setMin] = useState("");
    const [engine, setEngine] = useState("");
    const [mileage, setMileage] = useState("");
    const [speed, setSpeed] = useState("");
    const [price, setPrice] = useState("");
    const [stack, setStack] = useState("");
    const [quantity, setQuantity] = useState("");
    const [img, setImg] = useState("");

    const handleAddProduct = async (event) => {
        event.preventDefault();
        const newProduct = {
           name: name, brand:  brand, maxPower : max, minPower : min, engine: engine, mileage:  mileage, topSpeed: speed, price: price, stack: stack, quantity: quantity
        };
       try{
       await fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(product => {
            console.log('success', product)
        })
       }
       catch(error){
        console.log(error);
       }
            
       
    }

    return (
        <div className='form-container' id='add'>
            <form onSubmit={handleAddProduct} className='add-form'>
                <div>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name='name' placeholder='Name'  required/>
                    <input onChange={(e) => setBrand(e.target.value)} value={brand} type="text" name='brand' placeholder='Brand'  required/>
                </div>
                <div>
                    <input onChange={(e) => setMax(e.target.value)} value={max} type="text" name='max' placeholder='Max Power'  required/>
                    <input onChange={(e) => setMin(e.target.value)} value={min} type="text" name='min' placeholder='Min Power'  required/>
                </div>
                <div>
                    <input onChange={(e) => setEngine(e.target.value)} value={engine} type="text" name='engine' placeholder='Engine'  required/>
                    <input onChange={(e) => setMileage(e.target.value)} value={mileage} type="text" name='mileage' placeholder='Mileage'  required/>
                </div>
                <div>
                    <input onChange={(e) => setSpeed(e.target.value)} value={speed} type="text" name='speed' placeholder='Top Speed'  required/>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" name='price' placeholder='Price'  required/>
                </div>
                <div className='input-3'>
                    <input onChange={(e) => setStack(e.target.value)} value={stack} type="text" name='stack' placeholder='Stack'  required/>
                    <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" name='quantity' placeholder='Quantity' required />
                    <input onChange={(e) => setImg(e.target.value)} value={img} type="text" name='imgUrl' placeholder='Image Url' required />
                </div>
              
                <input className='add-btn' type="submit" name="Add Product" />
            </form>
        </div>
    );
};

export default AddProduct;