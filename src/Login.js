import React from "react";
import { useNavigate } from "react-router-dom"; 
import GetAuth from './GetAuth';

function Login(){
    const navigate = useNavigate();
    const isLogin = () => {
        return true;
    }
    const handleClick = () => {
        GetAuth();
        isLogin();
        navigate('/callback');
    }
    return (
        <>
        <div>
            <h1>Welcome to Jammmin!</h1>
            <button onClick={handleClick}>Login with Spotify</button>
        </div>
        </>
    )
}

export default Login;