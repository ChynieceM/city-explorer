import './App.css';
import React from 'react';
import axios from "axios";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Form} from 'react-bootstrap';




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
      
    } catch (error) {
      alert('Please enter a valid city');
      console.error(error);
    }
  }
  const handleCity = (e) => {
    setMyCity(e.target.value);
  };
  return (
    <div className="App" style={{background: '#cce7e8', marginLeft:'40px', marginRight:'40px', marginTop:'20px', marginBottom:'20px'}}>
      <Form style={{background: '#1e81b0'}}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label style={{fontWeight: 'bold', fontSize:'50px'}} >Google Maps Misfits</Form.Label>
          <Form.Control type="text" value={myCity} onChange={handleCity} id="cityInput" placeholder="City Name"  />
        </Form.Group>
        <Button style={{background: ' #35495e',  cursor: 'pointer'}} onClick={fetchData}>Submit</Button>
      </fieldset>
    </Form>
      <div >
        <p>Location: {displayCity.display_name}</p>
        <p>Latitude: {displayCity.lat}</p>
        <p>Longitude: {displayCity.lon}</p>
        <div className={'d-flex justify-content-center'}>
          <Card style={{display: displayMap, marginBottom:'10px' }}>
            <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.e65687e540287de5bf7920f2c5a4d514&center=${displayCity.lat},${displayCity.lon}`} alt="map" />
          </Card>
        </div>
      </div>
    </div >
  );
}

export default App;
