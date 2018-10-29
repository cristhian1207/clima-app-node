const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyArq10ZYup6bm-FDr68HGfgdfHcX7eFiC8`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección: ${direccion}`);
    }
    let location = resp.data.results[0];
    let coor = location.geometry.location;
    return {
        direccion: location.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }
}

module.exports = {
    getLugarLatLng
}