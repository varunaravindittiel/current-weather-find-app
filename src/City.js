import './App.css';
import React, { useEffect, useState } from 'react';
import Climate from './Climate';

function City(props) {
    const [cityId, setCityId] = useState();
    useEffect(() => {
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${props.latitude}&longitude=${props.longitude}&localityLanguage=en`)
      .then(res => res.json())
      .then(response => {setCityId(response.localityInfo.administrative[2].geonameId)})
      .catch(error => console.log(error));
    },[1]);
         
  return (
      <div>
        {cityId && 
          <Climate 
            cityId={cityId} 
            backGround={props.backGround}
          />
        }
      </div>
  );
}

export default City;