
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ResidentInfo = ({residentUrl}) => {

    const[resident, setResident]=useState({})

     useEffect(()=>{
            axios.get(residentUrl)
            .then( res => setResident(res.data))
        },[residentUrl])
        

    return (

       
        <div className='card'>
            <h4>name: {resident.name}</h4>
            <img src={resident.image} alt="charging" />
            <ul>
                <li> <b>Status: </b> {resident.status}</li>
                <li> <b>Origin:</b> {resident.origin?.name}</li>
                <li> <b>Episodes where appear:</b> {resident.episode?.length}</li>
            </ul>
            
        </div>
    );
};

export default ResidentInfo; 