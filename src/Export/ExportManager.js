import React from 'react';
import ExportPlaylist from './ExportPlaylist';

function ExportManager({ songs }) {
  const handleCreatePlaylist = async () => {
    const songUriList = songs.map((song) => song.uri);
    const playlistId = localStorage.getItem('playlist_id');
    const accessToken = localStorage.getItem('spotify_access_token'); 

   
    const endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}` 
        },
        body: JSON.stringify({
          uris: songUriList
        })
      });

      if (response.ok) {
        const data = await response.json();
        alert('Playlist updated successfully', data);
      } else {
        console.error('Failed to update playlist', await response.json());
      }
    } catch (error) {
      console.error('Error updating playlist:', error);
    }
  };

  return (
    <>
      <ExportPlaylist onCreatePlaylist={handleCreatePlaylist} />
    </>
  );
}

export default ExportManager;
