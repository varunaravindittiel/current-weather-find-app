import React from 'react';

function Display(props) {
  
  return (
    <div>
      <div className="is-centered mt-6">
        <div class="columns is-mobile is-centered mt-1">
          <div class=
            {
              props.backGround 
                ? "columns box pr-6 has-background-white-ter" 
                : "columns box pr-6 has-background-grey-lighter"
            }>
            <div class="columns is-vcentered">
              <div class="column is-8">
                <img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}/>
                <div class="title has-text-centered">
                  {props.temperature} °C
                </div>
              </div>
              <div class="column has-text-centered is-bold	title is-5 ">
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