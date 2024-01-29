import React from 'react';
import exampleTracks from './exampleTracks';


function SearchResults({ searchTerm, onAddSong }){

    const filteredResults = exampleTracks.filter(track => 
        track.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.album.toLowerCase().includes(searchTerm.toLowerCase()) 
        );

    function handleAddSong(track){
        onAddSong({
            ...track,
        });
    }

    const arrayDataItems = searchTerm && filteredResults.map(track => 
        <div key={track.id}>
            <p>{track.name} - {track.artist} - {track.album} - <button onClick={() => handleAddSong(track)}>Add song</button></p>
        </div>
        )

    

    return (
        <>
            <ul>{arrayDataItems}</ul>
        </>
    );
}

export default SearchResults;