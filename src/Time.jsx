import React from 'react';
import Location from './Location.jsx'

const Time = (props) => {
    //add all of the locations searched for into an array so that all of them display
    const locations = [];
    for (let i = 0; i < props.locations.length; i++) {
        locations.push(
            <div className='locationCard'>
                <Location data={props.locations[i]} key={i}/>
            </div>
        )
    }
    
    return (
        <div className='locations'>
            {locations}
        </div>
    )
};

export default Time;