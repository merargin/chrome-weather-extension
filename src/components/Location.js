import React, { PropTypes } from 'react';

const Location = ({ name }) => {
    return (<div className="weather__city">{name}</div>);
};

Location.propTypes = {
  name: PropTypes.string.isRequired
};

export default Location
