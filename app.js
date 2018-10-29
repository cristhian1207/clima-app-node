const direccion = {
    alias: 'd',
    desc: 'Dirección de la ciudad a obtener el clima.',
    demand: true
}

const { getLugarLatLng } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima.js');
const argv = require('yargs')
    .options({ direccion })
    .argv;

let getInfo = async(direccion) => {
    try {
        let coors = await getLugarLatLng(direccion);
        let clima = await getClima(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${clima}°`
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));