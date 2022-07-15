import { useEffect, useState } from "react"

const useSingleService = serviceId => {
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    }, [serviceId]);
    return [service, setService];
}

export default useSingleService;