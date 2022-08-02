import { useNavigate } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import './manageProduct.css'

const ManageProduct = () => {
    const [services, setServices] = useServices();
    const navigate = useNavigate()





    const handleDelete = id => {
        const process = window.confirm('Are you sure you want to delete?')
        if(process){
            fetch(`https://warm-wave-07165.herokuapp.com/products/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining)
            })
        }
    }


    return (
        <div>
          <div className='manage-container' id='manage'>
          <h2>Manage Your Inventory</h2>
            <button onClick={() => navigate('/addProduct')} className='btn btn-primary mb-2'>Add a new item</button>
            {
                services.map(service => <div key={service._id}>
                    <div className="mange">
                        <div className="manage-item">
                            <img src={service.img} alt="" />
                            <h6>{service.name}</h6>
                            <p>Price: {service.price}</p>
                            <p>Quantity: {service.quantity}</p>
                        </div>
                        <div className="manage-btn">
                            <button onClick={() => navigate(`/updateStack/${service._id}`)} className='btn btn-info'>INVENTORY</button>
                            <button onClick={() => handleDelete(service._id)} className='btn btn-danger'>DELETE</button>

                        </div>
                    </div>
                </div>)
            }
          </div>
        </div>
    );
};

export default ManageProduct;