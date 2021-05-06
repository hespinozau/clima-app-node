const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=137446426a71dfe7515e0052f80b82bb`)

    return {
        temperatura: resp.data.main.temp
    }
}

module.exports = {
    getClima
}