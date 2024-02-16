import React, { useEffect, useState } from 'react';
import './SearchResults.css';

function SearchResults({ searchTerm, onAddSong }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const searchEndPoint = 'https://api.spotify.com/v1/search?q=';
            const encodedQuery = encodeURIComponent(searchTerm);
            const searchUrl = `${searchEndPoint}${encodedQuery}&type=track`;

            fetch(searchUrl, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('spotify_access_token')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(data => {
                setResults(data.tracks.items); // Assuming you want to store the track items
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
        }
    }, [searchTerm]);

    return (
        <div id="main">
            {/* Render your search results here */}
            {results.slice(0, 5).map(track => (
                <div key={track.id}>
                    <h2>
                        {track.name} - {track.album.name} - {track.artists.map(artist => artist.name).join(', ')}
                    <button id="addButton" onClick={() => onAddSong(track)}>+</button>
                    </h2>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
