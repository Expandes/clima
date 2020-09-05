const lugar = require('./lugar/lugar.js');
const weather = require('./weather/weather.js');
const { getLugarLatLong } = require('./lugar/lugar.js');


const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .help()
    .argv;


// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log)

// weather.getClima(40, -75)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await weather.getClima(coords.lat, coords.lon);

        return (`El clima de ${direccion} es de ${temp}`);

    } catch (e) {

        return (`No se pudo determinar el clima de ${direccion}`);

    }

}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);