import React from 'react';
//weather component takes in props from app
//displays longitude, latitude, cityname and weather description
//used to display info for each location
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