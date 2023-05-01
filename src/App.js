import './App.css';
import Explore from './Explore';
import axios from "axios";
//import { useState } from 'react';
//import { useEffect } from 'react';

function App() {
  //const [myCity, setMyCity] = useState("");

  const fetchData = async () => {
    const response = await axios.get("https://us1.locationiq.com/v1/search?key=pk.e65687e540287de5bf7920f2c5a4d514&q=Memphis%2CTennessee&format=json");
    console.log("response", response)
   // return setMyCity(response.data);
  }

//  // useEffect(() => {
//     fetchData();
  // }, [])
  return (
    <div className="App">
      <Explore fetchData={fetchData} />
    </div>
  );
}

export default App;
