import React, { PropTypes } from 'react';
import utils from '../utils/';

const Temperature = ({ temp }) => {
    return(
        <div className="weather__temperature">
            <span className="weather__temperature-value">
                <strong>{ utils.getReadableValue(temp) }</strong>
                <sup>0 °</sup>
                <b>C</b>
            </span>
            <span className="weather__temperature-date">{ utils.getReadableTime() }</span>
        </div>
    );
}

Temperature.propTypes = {
  temp: PropTypes.number.isRequired
};

export default Temperature
