import React, { useState, useEffect } from "react";
import ExportPlaylist from "./ExportPlaylist";

function PlaylistDetails({ songs, onRemoveSong }) {

    function removeSong(songId){
        onRemoveSong(songId);
    }

    function playlistNotEmpty(){
        return songs.length > 0;
    }
    console.log(songs);
    return (
        <>
        <div>
            <h3>Song - Artist - Album</h3>
            {songs.map((track) => (
                <div key={track.id}>
                    <p>{track.name} - {track.artist} - {track.album} <button onClick={() => removeSong(track.id)}>x</button></p>
                </div>
            ))}
            {playlistNotEmpty() && <ExportPlaylist songs={songs}/>}
        </div>
        </>
    )
}

export default PlaylistDetails;