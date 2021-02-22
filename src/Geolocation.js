import './App.css';
import City from  './City';
import React, { useEffect, useState } from 'react';

function Geolocation() {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    let [backGround, setBackGround] = useState(true);

    useEffect(() => {
      locator();
      const interval = setInterval(() => {
        setBackGround(backGround=!backGround)
        locator();
      }, 10000);
    },[1]);
  
    const locator = () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude( position.coords.latitude)
        setLongitude( position.coords.longitude)
      });
    }

  return (  
    <div>
      {
        latitude && longitude && 
        <City 
          latitude={latitude} 
          longitude={longitude} 
          backGround={backGround}
        />
      }
    </div>
  );
}

export default Geolocation;