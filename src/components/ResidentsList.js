import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residents}) => {

    return (
        <div className='list'>
            {residents?.map((resident) => (
                <ResidentInfo 
                residentUrl={resident}
                key={resident}/>
            ))}
        </div>
    );
};

export default ResidentsList;