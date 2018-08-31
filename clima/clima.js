const axios = require('axios');
const getClima = async(lat, lng) => {


    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c801e73e34c90197038894da1d88458f`);

    if (resp.data.cod === 400) {
        throw new Error(`Error de parametros ${ lat } y ${ lng }`);
    }

    return {
        temperatura: resp.data.main.temp,
    }
}
module.exports = {
    getClima
}