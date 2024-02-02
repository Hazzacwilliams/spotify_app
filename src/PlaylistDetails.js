import React, { useState, useEffect } from "react";
import ExportPlaylist from "./ExportPlaylist";

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
                console.log(track);
                console.log(track.artists.map(artist => artist.name).join(', '));
                return (
                    <div key={track.id}>
                        <p>{track.name} - {track.album.name} - {track.artists.map(artist => artist.name).join(', ')} <button onClick={() => removeSong(track.id)}>x</button></p>
                    </div>
                )
            })}
                

            {playlistNotEmpty() && <ExportPlaylist songs={songs}/>}
        </div>
        </>
    )
}

export default PlaylistDetails;