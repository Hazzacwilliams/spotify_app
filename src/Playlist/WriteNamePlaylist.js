import React, { useState } from "react";
import { createPlaylist } from "../Spotify_API/createPlaylist";
import './WriteNamePlaylist.css';

function WriteNamePlaylist({ onFormSubmit }){
    const [name, setName] = useState('');
    let isChanged = false;

    async function handleSubmit(e){
        e.preventDefault();
        try {
            await createPlaylist(name);
            onFormSubmit(name);
        } catch (error) {
            console.error("Failed to generate playlist:" + error);
        }
        
    }
    function handleInputChange(e){
        setName(e.target.value);
    }
    function changeButton(){
        isChanged = true;
        let button = document.getElementById("button");
        button.innerHTML = "Change name";
    }
    return (
        <>
        <div id="playlistNaming">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name your playlist" value={name} onChange={handleInputChange}></input>
                <button id="button" class="button" type="submit" onClick={!isChanged && changeButton}>Confirm name</button>
            </form>
            
        </div>
        </>
    );
}

export default WriteNamePlaylist;