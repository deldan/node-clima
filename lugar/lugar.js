const axios = require('axios');

const getLatLng = async(direccion) => {
    let encoderUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encoderUrl }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para tu ciudad ${ direccion }`);
    }

    return {
        direccion: resp.data.results[0].formatted_address,
        lat: resp.data.results[0].geometry.location.lat,
        lng: resp.data.results[0].geometry.location.lng
    }
}
module.exports = {
        getLatLng
    }
    // https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=c801e73e34c90197038894da1d88458f
    // api.openweathermap.org/data/2.5/weather?lat=35&lon=139
    // c801e73e34c90197038894da1d88458f