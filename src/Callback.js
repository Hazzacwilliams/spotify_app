import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash;
        let token = null;

        if (hash) {
            const params = new URLSearchParams(hash.substring(1)); // Remove the '#' and parse
            token = params.get('access_token');
            
        }

        if(!token){
            token = localStorage.getItem('spotify_access_token');
        }

        if (token) {
            console.log("navigating to home");
            localStorage.setItem('spotify_access_token', token);
            navigate('/home'); // Navigate to the home route
        } else {
            navigate('/');
        }
        setIsLoading(false);
    }, [navigate]);
    if(isLoading){
        return <div>Loading...</div>;
    }
    
}

export default Callback;
