import React, { useState, useEffect } from 'react';
import CreatePlaylist from './CreatePlaylist';
import PlaylistDetails from './PlaylistDetails';
import NamePlaylist from './NamePlaylist';

function Playlist({ songs, onRemoveSong }){
    const [songList, setSongList] = useState(songs);
    const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);

    useEffect(() => {
        setSongList(songs);
    }, [songs])

    function handleClick(){
        if(isPlaylistVisible === false){
            setIsPlaylistVisible(true)
        }else {
            setIsPlaylistVisible(false);
        }  
    }



    return (
        <>
        <div>
            <CreatePlaylist onClick={handleClick}/>
            {isPlaylistVisible && <NamePlaylist />}
            {isPlaylistVisible && <PlaylistDetails songs={songList} onRemoveSong={onRemoveSong}/>}
        </div>
        </>
    );
}

export default Playlist;