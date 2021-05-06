const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion dee la ciudad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}