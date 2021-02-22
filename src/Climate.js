import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Display from './Display';

function Climate(props) {
  const [cityName, setCityName] = useState();
  const [temperature, setTemperature] = useState();
  const [icon, setIcon] = useState();

  const getClimate= `
    query {
      getCityById(id: "${props.cityId}"){
        name
        id
        weather{
          temperature{
            actual
          }
          summary{
            icon
          }
        }      
      }
    }`
    
  useEffect(() => {
    axios.post(`https://graphql-weather-api.herokuapp.com/`,{
      query: getClimate,
    })
    .then( res =>{
      setCityName(res.data.data.getCityById[0].name);
      const tempFar= res.data.data.getCityById[0].weather.temperature.actual;
      setTemperature((tempFar - 273.15));
      setIcon(res.data.data.getCityById[0].weather.summary.icon)
      console.log(res.data.data);
    })
    .catch(error => console.log(error));
  },[1]);
    
  return (
    <div>
      <Display 
        cityName={cityName}
        temperature={temperature} 
        icon={icon} 
        backGround={props.backGround}/>
    </div>   
  );
}

export default Climate;