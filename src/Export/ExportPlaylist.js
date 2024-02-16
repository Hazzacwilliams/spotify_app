import React from "react";

function ExportPlaylist({ onCreatePlaylist }){

    return (
        <>
            <button class="button" onClick={onCreatePlaylist}>Add Items</button>
        </>
    )
}

export default ExportPlaylist;