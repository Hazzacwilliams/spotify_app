import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
    console.log("huh");
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash;
        let token = null;
        if (hash) {
            const params = new URLSearchParams(hash.substring(1)); // Remove the '#' and parse
            token = params.get('access_token');
            
        }

        if (token) {
            localStorage.setItem('spotify_access_token', token);
            navigate('/home'); // Navigate to the home route
            console.log('home');
        } else {
            navigate('/');
            console.log('away');
        }
        setIsLoading(false);
    }, []);
    if(isLoading){
        
        return <div>Loading...</div>;
    }
    
}

export default Callback;
