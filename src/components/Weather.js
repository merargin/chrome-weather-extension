import React, { PropTypes } from 'react';
import utils from '../utils/';
import Location from './Location';
import Temperature from './Temperature';
import Cloud from './Cloud';
import ForeCast from './ForeCast';

const Weather = ({ weather }) => {
  return (
    <div className="weather">
      <Location {...weather} />
      <div className="weather__block">
        <Temperature {...weather.main} />
        <Cloud {...weather.weather[0]} />
        <ForeCast {...Object.assign({}, weather.main, weather.wind)} />
      </div>
    </div>
  );

};

Weather.propTypes = {
  weather: PropTypes.object.isRequired
};

export default Weather