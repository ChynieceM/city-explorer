import './App.css';
import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import Weather from './Weather';
import Map from './Map';
import './rain.css';
import Movie from './Movie';
import Location from './Location';


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
      let response = await axios.get(`https://city-explorer-api-sdwd.onrender.com/movies?searchQuery=${input}`)
      console.log('API response:', response.data);
      setMovies(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  //fetches data from our weather API based on the location
  const fetchLocationData = async () => {
    try {

      let response = await axios.get(`https://city-explorer-api-sdwd.onrender.com/weather/?searchQuery=${input}`)
      //Updating responseData with the first result from the API response
      console.log('API response:', response.data);
      setResponseData(Array.isArray(response.data) ? response.data : []);
      // console.log(response);
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
  if (Array.isArray(responseData)) {
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
          valid_date={element?.valid_date}
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
      <Location setLocation={setLocation} myCity={myCity} input={input} fetchData={fetchData} handleCity={handleCity} displayCity={displayCity}/>
        <Button onClick={() => setIsRaining(!isRaining)} style={{ background: ' #35495e', cursor: 'pointer', padding: '0px 40px 5px 40px', margin: '30px 0px 0px 30px' }}>Let it rain</Button>
        {isRaining && <div className="rain">{generateRaindrops()}
        </div>
        }
        <div>{threeDayForecast}</div>
      <div >

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
          {console.log(movies)}
          <Movie movies={movies} />
          <Map displayMap={displayMap} displayCity={displayCity}/>
        </div>
      </div>
    </div >

  );
}

export default App;
