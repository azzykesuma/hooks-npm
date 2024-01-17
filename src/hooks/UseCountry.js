import { useState, useEffect } from 'react'

const useCountry = name => {
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        const fetchCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                const data = await response.json();
                setCountry(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }

        }
        fetchCountry();
    }, [name]);

    return { country, loading, error };
}

export default useCountry;