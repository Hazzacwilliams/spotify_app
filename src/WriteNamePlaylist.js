import React, { useState } from "react";

function WriteNamePlaylist({ onFormSubmit }){
    const [name, setName] = useState('');
    let isChanged = false;

    function handleSubmit(e){
        e.preventDefault();
        onFormSubmit(name);
    }
    function handleInputChange(e){
        setName(e.target.value);
    }
    function changeButton(){
        isChanged = true;
        let button = document.getElementById("button");
        button.innerHTML = "Change name";
    }
    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name your playlist" value={name} onChange={handleInputChange}></input>
                <button id="button"type="submit" onClick={!isChanged && changeButton}>Confirm name</button>
            </form>
            
        </div>
        </>
    );
}

export default WriteNamePlaylist;