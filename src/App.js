import './App.css';
import axios from "axios";
import { useState } from 'react';
//import { useEffect } from 'react';

function App() {
  const [myCity, setMyCity] = useState('');
  const [displayCity, setdisplayCity ]= useState('');
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://us1.locationiq.com/v1/search?key=pk.e65687e540287de5bf7920f2c5a4d514&q=${myCity}&format=json`);
      //console.log("response", response.data)
      setdisplayCity(response.data);
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
      <div>
        {JSON.stringify(displayCity)}
      </div>
    </div>
  );
}

export default App;
