
import React, { useEffect, useState } from 'react';
import ResidentsList from './ResidentsList';
import SearchBox from './SearchBox';
import axios from 'axios';


const LocationInfo = () => {

    const[location, setLocation] = useState({})
    

    

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get( `https://rickandmortyapi.com/api/location/${random}` )
        .then(res => setLocation(res.data))
    },[])

    


    return (
        <div className='location'>
            <SearchBox setLocation={setLocation}/>
            <h1>{location.name}</h1>
            <ul>
                <li>Type: {location.type}</li>
                <li>Dimension: {location.dimension}</li>
                <li>population: {location.residents?.length}</li>
            </ul>
            <ResidentsList residents={location.residents}/>
            
        </div>
    );
};

export default LocationInfo;