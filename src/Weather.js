import React from 'react';

function Weather(props){ 
    return(
    <div>
    {/* <p>Latitude: {props.lat}</p> 
    <p>Longitude: {props.lon}</p>
    <p>City: <strong>{props.city}</strong></p> */}
    <p>Forecast: <i>{props.description}</i></p>
    </div>
    )
    }
    export default Weather;