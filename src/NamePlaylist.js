import React, { useState } from "react";
import WriteNamePlaylist from "./WriteNamePlaylist";
import SetNamePlaylist from "./SetNamePlaylist";

function NamePlaylist(){
    const [name, setName] = useState('');
   
    return (
        <>
        <div>
            <WriteNamePlaylist onFormSubmit={setName}/>
            <SetNamePlaylist nameSet={name}/>
        </div>
        </>
    );
}

export default NamePlaylist;