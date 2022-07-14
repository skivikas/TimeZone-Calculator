import React from 'react';

const Location = (props) => {
    console.log('props is', props)
    return (
        <div className='timeData'>
            <p>The current time in {`${props.data.city}, ${props.data.state} ${props.data.country}`} is {`${props.data.time} ${props.data.timezone}`} time</p>
        </div>
    )
}

export default Location; 