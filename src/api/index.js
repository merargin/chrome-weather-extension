import axios from 'axios';
import utils from '../utils/';
import config from '../config';

const URL = 'http://api.openweathermap.org/data/2.5/weather?';

const getForeCastURL = (latLng) =>{
    return `${URL}lat=${latLng[0]}&lon=${latLng[1]}&appid=${config.API_KEY}&units=metric`;
}

const getForeCast = (latitudeLongitude) => {
    if(latitudeLongitude){
        return axios.get(getForeCastURL(latitudeLongitude)).then(function(response) {
            return response;
        });
    } else {
        return utils.getGeoLocation().then(function(latLng) {
            return axios.get(getForeCastURL(latLng));
        }).then(function(response) {
            return response;
        });
    }
};


export default { getForeCast }
