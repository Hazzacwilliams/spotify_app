import React, { useState } from "react";
import SearchManager from './Search/SearchManager';
import Playlist from './Playlist/Playlist';
import './Home.css';

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
      <h1>JAMMMIN </h1>
      <h4>By Harry Williams</h4>
      
      <SearchManager onAddSong={handleAddSong}/>
      <Playlist songs={playlist} onRemoveSong={removeSong}/>
    </div>
  );
}
export default Home;