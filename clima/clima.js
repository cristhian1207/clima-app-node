const axios = require('axios');

let appid = '84a2f6ca0bc6b7fb303aa3b40d914f7f';
let units = 'metric';

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${units}&appid=${appid}`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}