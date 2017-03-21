import React, { PropTypes } from 'react';
import utils from '../utils/';

const Cloud = ({ main, id, description }) => {
    return (
        <div className="weather__cloud">
          <span className="weather__cloud-image">
            <img src={ utils.getImageURL(main, id) } />
          </span>
          <span className="weather__cloud-description">{ description }</span>
        </div>
    );
};

Cloud.propTypes = {
  main: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default Cloud;
