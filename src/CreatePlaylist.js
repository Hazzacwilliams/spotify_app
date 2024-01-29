import React from 'react';

function CreatePlaylist({ onClick }){

    return (
        <>
            <button onClick={onClick}>Create Playlist!</button>
        </>
    );
}

export default CreatePlaylist;