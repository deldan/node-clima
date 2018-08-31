const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'dirección de una ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLatLng(direccion);
        let tempi = await clima.getClima(coors.lat, coors.lng);
        return `El clima en ${ coors.direccion } es de ${ tempi.temperatura } C`;
    } catch (e) {
        return `no se puedo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));