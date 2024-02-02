import React, { useState } from "react";
import SearchBar from "./SearchBar";

function GetSpotify(){
    const [searchQuery, setSearchQuery] = useState('');
    const searchEndPoint = 'https://api.spotify.com/v1/search?q=';
    

    const handleSearch = () => {
        const encodedQuery = encodeURIComponent(searchQuery);
        const searchUrl = `${searchEndPoint}${encodedQuery}&type=track`;
        fetch(searchUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('spotify_access_token')}`,
                'Content-Type': 'application/json'
            }

        })
        .then(response => {
            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        })
    }
};

export default GetSpotify;