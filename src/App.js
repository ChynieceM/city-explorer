import './App.css';
import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form } from 'react-bootstrap';
import Weather from './Weather';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
import './rain.css';
import Movie from './Movie';
//rain animation requirements 
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon,
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
});


function App() {
  // Creating a state variable called location and a function to update it
  const [location, setLocation] = useState('');
  const [responseData, setResponseData] = useState([]);
  const [input, setInput] = useState('');
  const [myCity, setMyCity] = useState('');
  const [displayCity, setdisplayCity] = useState('');
  const [displayMap, setdisplayMap] = useState('none');
  const [movies, setMovies] = useState([]);
  const [isRaining, setIsRaining] = useState(false);
//for rain animation
  const generateRaindrops = () => {
    const numberOfDrops = 100;
    const drops = [];
  
    for (let i = 0; i < numberOfDrops; i++) {
      const delay = Math.random() * 1;
      const speed = Math.random() * 0.7 + 0.7;
      const left = Math.random() * 100;
      drops.push(
        <div
          key={i}
          className="drop"
          style={{
            left: `${left}vw`,
            animationDuration: `${speed}s`,
            animationDelay: `${delay}s`,
          }}
        ></div>
      );
    }
  
    return drops;
  };
const fetchMovieData = async () => {
  try {
    let response = await axios.get(`http://localhost:3001/movies?searchQuery=${input}`)
    setMovies(response.data)
  } catch (error) {
    console.log(error)
  }
}
  //fetches data from our weather API based on the location
  const fetchLocationData = async () => {
    try {
      let response = await axios.get(`http://localhost:3001/weather/?searchQuery=${location}`)
      //Updating responseData with the first result from the API response
      setResponseData(response.data)
      console.log(response);
      //catch errors during the request
    } catch (error) {
      //If the error response status is 404 (or Not Found) alert user
      console.log(error)
      //   if ( error.response.status === 500) {
      //     alert('Enter a valid city :)');
      //   }
    }

  };
  //calls async function to fetch data
  useEffect(() => {
    if (location !== '') {
      fetchLocationData();
      fetchMovieData();
    }
  }, [location]);

  let threeDayForecast;
  if (responseData !== []) {
    threeDayForecast = responseData.map((element, index) => {
      return (
        <Weather
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          description={element?.description}
        />
      );
    })
  };


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
    setInput(e.target.value);
  };
  return (
    <div style={{ height: '100vh', padding: '20px', margin: '10px 10px 10px 10px', border: '2px solid #990099' }}>
      <Form style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold', fontSize: '50px' }} >Google Maps Misfits</Form.Label>
            <Form.Control type="text" value={myCity} onChange={handleCity} id="cityInput" placeholder="City Name" />
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
            <Button style={{ background: ' #35495e', cursor: 'pointer', padding: '0px 40px 5px 40px', margin: '3px 30 30 30px' }} onClick={(e) => {
              e.preventDefault()
              setLocation(input)
              fetchData()
              //setLocation function sets the location state variable to the current value of the input state variable
            }}>Explore</Button>
          </div>
        </fieldset>
      </Form>
      <div >
        <div>Location: {displayCity.display_name}</div>
        <div>Latitude: {displayCity.lat}</div>
        <div>Longitude: {displayCity.lon}</div>
        <div>{threeDayForecast}</div>
        <Button onClick={() => setIsRaining(!isRaining)} style={{ background: ' #35495e', cursor: 'pointer', padding: '0px 40px 5px 40px', margin: '30px 0px 0px 30px' }}>Let it rain</Button>
        {isRaining && <div className="rain">{generateRaindrops()}</div>}

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
          {/* renders the Weather component w/ props based on responseData state variable */}
          <Movie movies={movies}/>
          <Card style={{ display: displayMap, marginBottom: '10px', marginTop: '0px', height: '40%', width: '40%' }}>
            {displayCity.lat && displayCity.lon ? (
              <MapContainer
                center={[displayCity.lat, displayCity.lon]}
                zoom={12}
                style={{ display: displayMap, height: "500px", width: "600px" }} scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}-tiles.locationiq.com/v3/streets/r/{z}/{x}/{y}.png?key=pk.e65687e540287de5bf7920f2c5a4d514"
                  attribution='&copy; <a href="https://www.locationiq.com/">LocationIQ</a> contributors'
                />
                <Marker
                  position={[displayCity.lat, displayCity.lon]}>
                  <Popup> {[displayCity.display_name]}</Popup>
                </Marker>
              </MapContainer>
            ) : null}

          </Card>
        </div>
      </div>
    </div >

  );
}

export default App;
