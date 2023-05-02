import './App.css';
import axios from "axios";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import React from 'react';

function App() {
  const [myCity, setMyCity] = useState('');
  const [displayCity, setdisplayCity] = useState('');
  const [displayMap, setdisplayMap] = useState('none');
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://us1.locationiq.com/v1/search?key=pk.e65687e540287de5bf7920f2c5a4d514&q=${myCity}&format=json`);
      console.log("response", response.data)
      setdisplayCity(response.data[0]);
      setdisplayMap('block');
      //return displayCity;
    } catch (error) {
      console.error(error);
    }
  }
  const handleCity = (e) => {
    setMyCity(e.target.value);
  };
  return (
    <div className="App">
      <label>
        Enter City Name:
        <input type="text" value={myCity} onChange={handleCity} id="cityInput" placeholder="City Name" />
        <button onClick={fetchData}>Explore!</button>
      </label>
      <div >
        <p>Location: {displayCity.display_name}</p>
        <p>Latitude: {displayCity.lat}</p>
        <p>Longitude: {displayCity.lon}</p>
        <div className={'d-flex justify-content-center'}>
          <Card style={{display: displayMap}} >
            <Card.Img variant="top"  src={`https://maps.locationiq.com/v3/staticmap?key=pk.e65687e540287de5bf7920f2c5a4d514&center=${displayCity.lat},${displayCity.lon}`} alt="map" />
          </Card>
        </div>
      </div>
    </div >
  );
}

export default App;
