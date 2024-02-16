import React, { useState, useEffect } from "react";
import ExportManager from "../Export/ExportManager";
import './PlaylistDetails.css';

function PlaylistDetails({ songs, onRemoveSong }) {

    function removeSong(songId){
        onRemoveSong(songId);
    }

    function playlistNotEmpty(){
        return songs.length > 0;
    }
    
    return (
        <>
        <div>
            <h3>Song - Album - Artist</h3>
            {songs.map((track) => {
                return (
                    <div key={track.id}>
                        <p>{track.name} - {track.album.name} - {track.artists.map(artist => artist.name).join(', ')} <button onClick={() => removeSong(track.id)}>x</button></p>
                    </div>
                )
            })}
                

            {playlistNotEmpty() && <ExportManager songs={songs}/>}
        </div>
        </>
    )
}

export default PlaylistDetails;