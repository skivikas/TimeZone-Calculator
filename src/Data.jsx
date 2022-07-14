import React, {useState} from 'react';
import Time from './Time.jsx';

const Data = (props) => {
    const [value, setValue] = useState([]);

    const searchData = (event) => {
        let lat = document.getElementById('lat').value;
        let long = document.getElementById('long').value;
        console.log('lat is', lat)
        console.log('long is', long)

        fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=MDECV49J94OF&format=json&by=position&lat=${lat}&lng=${long}`)
        .then(data => data.json())
        .then((data) => {
            setValue([...value, {
                city: data.cityName,
                state: data.regionName, 
                country: data.countryName, 
                time: data.formatted,
                timezone: data.abbreviation
            }]);

        })
        .catch(error => console.log('error in timezone API request', error))
    }
    
    
    return (
        <div id='dashboard'>
            <div id='inputs'>
                <input className='input' id='lat' type='text' placeholder='Latitude'></input>
                <input className='input' id='long' type='text' placeholder='Longtitude'></input>
    
            </div>
            <button className='inputButton' onClick={searchData}>Submit</button>
            <div id='locations'>
                <Time locations={value}/>
            </div>

        </div>
        
    )
}

export default Data;