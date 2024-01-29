import React, { useState } from 'react';

function SearchBar({ onSearchChange }){

    const [search, setSearch] = useState('');

    function handleChange(e){
        setSearch(e.target.value);
        onSearchChange(e.target.value);
    }

    
    return (
        <>
        <div>
            <input id='searchBar' type='text' value={search} onChange={handleChange} placeholder='Browse Spotify Here!'></input>
        </div>
        </>
    );
}

export default SearchBar;