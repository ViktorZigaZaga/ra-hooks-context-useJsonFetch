import React, { useEffect, useRef, useState } from "react";

function UseJsonFetch(url, opts) {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [hasError, setError] = useState(null);
    const timeStampRef = useRef();

    const fetchData = async () => {
        const timeStamp = Date.now();
        timeStampRef.current = timeStamp;
        setLoading(true);

        try{
            const response = await fetch(url + opts);

            if(!response.ok) {
                throw new Error(response.statusText);
            }

            const data = await response.json();
            if(timeStampRef.current === timeStamp) {
                setData(data);
            }
            setError(null);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return {loading: isLoading, data: data,  error: hasError};
}

export default UseJsonFetch