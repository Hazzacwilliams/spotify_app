import React from 'react';

function GetAuth(){
    const client_id = '16181d45ebf143afaf10846453dde2eb';
    const response_type = 'token';
    const redirect_uri = encodeURIComponent('http://localhost:3000/callback');

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}`;

    window.location = spotifyAuthUrl;
}

export default GetAuth;