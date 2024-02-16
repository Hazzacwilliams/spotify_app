import React from "react";

async function GetUser(){
    try {
        const accessToken = localStorage.getItem('spotify_access_token'); // Assuming the access token is stored in localStorage
        const response = await fetch('https://api.spotify.com/v1/me', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Spotify User ID:", data.id); // Log the user ID
        localStorage.setItem('user_id', data.id);
        return data.id; // Return the user ID
    } catch (error) {
        console.error("Error fetching Spotify user ID:", error);
        return null; // Handle errors appropriately
    }
}

export default GetUser;