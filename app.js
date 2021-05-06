const argv = require('./config/yargs').argv

const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `La temperatura en ${coords.direccion} es de ${temp.temperatura}°C`

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));