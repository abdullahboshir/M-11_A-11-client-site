import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import swal from 'sweetalert';

const UpdateStack = () => {
    const {id} = useParams();
    const [service, setServices] = useState({});
    const [updateQuantity, setUpdateQuantity] = useState(0)
    const { name, img, engine, mileage, price, topSpeed, quantity, brand, maxPower, minPower, stack, _id } = service;

console.log(id)
    useEffect(() => {
        const url = `https://warm-wave-07165.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data))
    }, [service, id]);


    const handleRestock = async (event) => {
        event.preventDefault();
        const newQuantity =  parseInt(updateQuantity) + parseInt(quantity);

    const url = `https://warm-wave-07165.herokuapp.com/products/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({quantity: newQuantity})
    })
    .then(res => res.json())
    .then(data => {
        console.log('success', data)
        swal({
            title: "Good job!",
            text: "Your Product has been added",
            icon: "success",
          });
        event.target.reset();
    })
};




    return (
        <div className='update-container' style={{heght: "100vh"}}>
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
