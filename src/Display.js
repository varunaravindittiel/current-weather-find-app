import React from 'react';

function Display(props) {
  
  return (
    <div>
      <div className="is-centered mt-6">
        <div className="columns is-mobile is-centered mt-1">
          <div className=
            {
              props.backGround 
                ? "columns box pr-6 has-background-white-ter" 
                : "columns box pr-6 has-background-grey-lighter"
            }>
            <div className="columns is-vcentered">
              <div className="column is-8">
                <img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}/>
                <div className="title has-text-centered">
                  {props.temperature} °C
                </div>
              </div>
              <div className="column has-text-centered is-bold	title is-5 ">
                {props.cityName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Display;