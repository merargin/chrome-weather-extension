const imageExtn = '.png';
const imageURLPrefix = 'assets/images/';
const foreCastImages = [
    'Clear',
    'Clouds',
    'Cloudy',
    'Fair',
    'Foggy',
    'FreezingDrizzle',
    'Mist',
    'MixedRainAndSnow',
    'PartlyCloud',
    'Rain',
    'Scattered',
    'ScatteredShowers',
    'ScatteredThunderstorms',
    'Sleet',
    'Snow',
    'Sunny',
    'ThunderStorms'
];

const getGeoLocation = () => {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(function(position) {
      resolve([position.coords.latitude, position.coords.longitude]);
    });
  });
}

const getReadableValue = (value) => {
    return Math.round( value * 10 ) / 10;
}

const getReadableTime = () => {
    const date = new Date();
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}

const getImageURL = (condition, code) => {
    let imageName = '';
    if(foreCastImages.indexOf(condition) !== -1){
        imageName = condition;
    } else if(code >= 200 && code < 300){
        imageName = "Rain";
    } else if (code >= 300 && code < 500){
        imageName = "Sleet";
    } else if (code >= 500 && code < 600){
        imageName = "Rain";
    } else if (code >= 600 && code < 700){
        imageName = "Snow";
    } else if (code >= 700 && code < 800){
        imageName = "Foggy";
    } else if (code === 800){
        imageName = "Clear";
    } else if (code === 801){
        imageName = "PartlyCloudy";
    } else if (code >= 802 && code <= 804){
        imageName = "Cloudy";
    } else if (code === 905 || (code >= 951 && code <= 956)){
        imageName = "Wind";
    } else if (code >= 900 && code < 1000){
        imageName = "Rain";
    }
    return imageURLPrefix + imageName + imageExtn;
}

export default { getGeoLocation, getReadableValue, getReadableTime, getImageURL }
