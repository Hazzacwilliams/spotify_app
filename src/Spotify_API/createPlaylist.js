
export const createPlaylist = async (playlistName) => {

    let playlistDetails = {
        name: playlistName,
        };

    const url = `https://api.spotify.com/v1/users/${localStorage.getItem('user_id')}/playlists`;
        
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('spotify_access_token')}`,
            'Content-type': 'application/json',
        },
        body: JSON.stringify(playlistDetails),
    });

    if(!response.ok){
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    localStorage.setItem('playlist_id', data.id);

}


