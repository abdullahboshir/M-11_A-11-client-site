const { useState, useEffect } = require("react")

const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://warm-wave-07165.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return [services, setServices];
};

export default useServices;