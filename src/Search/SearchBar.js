import React, { useState } from 'react';
import './SearchBar.css'

function SearchBar({ onSearchChange }){

    const [search, setSearch] = useState('');

    function handleChange(e){
        setSearch(e.target.value);
        onSearchChange(e.target.value);
    }

    
    return (
        <>
        <div>
            <span class="input">
                <input id='myInput' type='text' value={search} onChange={handleChange} placeholder='Browse Spotify Here!'></input>  
            </span>
        </div>
        </>
    );
}

export default SearchBar;