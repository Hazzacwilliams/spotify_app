import React, { useState } from 'react';

function SearchBar(){

    const [search, setSearch] = useState('');

    function handleChange(e){
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert('Button works!');
    }
    
    return (
        <>
        <div>
            <input id='searchBar' type='text' value={search} onChange={handleChange}></input>
            <button type="submit" value="Search" onClick={handleSubmit}>Search!</button>
        </div>
        </>
    );
}

export default SearchBar;