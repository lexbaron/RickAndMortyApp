import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setLocation}) => {

    const[search, setSearch] = useState( " " )

    const searchtype = () => {
        axios.get( `https://rickandmortyapi.com/api/location/${search}` )
        .then(res => setLocation(res.data))
    }
     

    return (
        <div className='input'>
            <input 
            type="text" 
            placeholder="put an ID"
            onChange={e => setSearch(e.target.value)} value={search} 
            />
            <button onClick={searchtype}>
            <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    );
};

export default SearchBox;