import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


function SearchManager({ onAddSong }){

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <SearchBar onSearchChange={setSearchTerm} />
            <SearchResults searchTerm={searchTerm} onAddSong={onAddSong}/>
        </>
    );
}

export default SearchManager;