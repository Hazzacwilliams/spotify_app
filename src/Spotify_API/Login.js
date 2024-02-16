import React from "react";
import GetUser from "./GetUser";
// Removed useNavigate since it's not needed for direct redirect
// import GetAuth; // Not used in this adjusted approach

function Login() {
    const handleLogin = () => {
        // Directly setting window.location.href for Spotify auth
        const client_id = '16181d45ebf143afaf10846453dde2eb';
        const response_type = 'token';
        const redirect_uri = encodeURIComponent('http://localhost:3000/callback');
        const scope = 'playlist-modify-public playlist-modify-private';
        const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${encodeURIComponent(scope)}`;

        window.location.href = spotifyAuthUrl;
        
    };

    return (
        <>
            <div>
                <h1>Welcome to Jammin!</h1>
                <button onClick={handleLogin}>Login with Spotify</button>
            </div>
        </>
    );
}

export default Login;
