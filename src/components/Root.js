import React, { Component, PropTypes } from 'react';
import Weather from './Weather';
import api from "../api/";
import config from '../config';

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: null,
      repeat: false
    };
  }

  componentWillMount() {
    var root = this;
    root.getWeather();
    this.state.repeat = setInterval(function(){
      root.getWeather();
    }, config.REFRESH);
  }

  componentWillUnMount(){
    clearTimeout(this.state.repeat);
  }

  getWeather() {
    api.getForeCast().then(function(response) {
      this.setState({
        weather: response.data
      });
    }.bind(this));
  }

  render() {
    if(this.state.weather){
      return <Weather weather={this.state.weather} />
    }
    return <div className="row"><div className="loading">Loading...</div></div>
  }
}

export default Root;
