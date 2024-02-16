import React from 'react';
import './CreatePlaylist.css';

function CreatePlaylist({ onClick }){

    return (
        <>
            <button class="button" role="button" onClick={onClick}>Create Playlist!</button>
        </>
    );
}

export default CreatePlaylist;