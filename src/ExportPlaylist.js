import React, { useState } from "react";

function ExportPlaylist({ songs }){

    const justUris = [];

    function getUris(){
        for(var i = 0; i < songs.length; i++){
            justUris[i] = songs[i].uri;
        }
    }
    

    return (
        <>
            <button onClick={getUris}>Export Playlist</button>
        </>
    )
}

export default ExportPlaylist;