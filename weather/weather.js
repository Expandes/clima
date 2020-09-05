const axios = require('axios');



const getClima = async(lat, lng) => {


    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=455c6a170fe1cbd952a211eaa809c85c&units=metric`);

    return resp.data.main.temp;
}



module.exports = {
    getClima
}