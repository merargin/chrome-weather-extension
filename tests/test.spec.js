import utils from '../src/utils/';
import api from '../src/api/';

describe('Weather App Tests', () => {

  it('It should provide readable single decimal value', () => {
    expect(utils.getReadableValue(27.733232)).toEqual(27.7);
  })

  it('It should give cloud image for given weather condition', () => {
    expect(utils.getImageURL('Cloudy')).toEqual('assets/images/Cloudy.png');
  })

  it('It should give cloud image for given weather code', () => {
    expect(utils.getImageURL('', 800)).toEqual('assets/images/Clear.png');
  })

  /*let weather = {};
  it('It should get success response from server ', async () => {
    weather = await api.getForeCast([47.6682, 9.5916]);
    expect(weather.status).toEqual(200);
  })

  it('it should get weather condition of Tettnang', () => {
    expect(weather.data.name).toEqual('Tettnang');
  })*/

});
