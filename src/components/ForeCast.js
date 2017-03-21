import React, { PropTypes }from 'react';
import utils from '../utils/';

const ForeCast = ({ humidity, speed }) => {
    return (
        <div className="weather__conditions">
            <div>
                <span>Humidity: <em>{ utils.getReadableValue(humidity) }%</em></span>
                <span>Wind: <em>{ utils.getReadableValue(speed * 3.6) } km/h</em></span>
            </div>
        </div>
    );
};

ForeCast.propTypes = {
  humidity: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired
};

export default ForeCast;
