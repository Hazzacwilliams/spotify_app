import React, { useState } from "react";
import SearchManager from './SearchManager';
import Playlist from './Playlist';

function Home() {
  const [playlist, setPlaylist] = useState([]);


  function handleAddSong(track){
    setPlaylist(currentPlaylist => {
      if (currentPlaylist.some(song => song.id === track.id)){
        return currentPlaylist;
      }
      return [...currentPlaylist, track];
      
    });
  }

  function removeSong(songId) {
    setPlaylist(currentSongs => currentSongs.filter(song => song.id !== songId));
}

  return (
    <div>
      <h1>JAMMMIN</h1>
      <h2>By Harry Williams</h2>
      <SearchManager onAddSong={handleAddSong}/>
      <Playlist songs={playlist} onRemoveSong={removeSong}/>
    </div>
  );
}
export default Home;