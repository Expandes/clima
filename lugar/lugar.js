const axios = require('axios');



const getLugarLatLong = async(dire) => {

    const encodedUrl = encodeURI(dire);


    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json?access_token=pk.eyJ1IjoiZXhwYW5kZXMiLCJhIjoiY2tlb2NnY2ptMGZudzJybnR1ODRlMDEwZiJ9.JJRSm5Ivd1OZl5tFdTkJoA`,
        timeout: 1000,
        headers: { 'access_token': 'pk.eyJ1IjoiZXhwYW5kZXMiLCJhIjoiY2tlb2NnY2ptMGZudzJybnR1ODRlMDEwZiJ9.JJRSm5Ivd1OZl5tFdTkJoA' }
    });


    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dire}`);
    }

    const data = resp.data.features[1]["geometry"];
    const direccion = resp.data.features[1]["place_name"];
    const coordinates = data["coordinates"];
    const lon = coordinates[0];
    const lat = coordinates[1];


    // instance.get()
    //     .then(resp => {

    //         console.log(resp.data.features[1]["geometry"]);

    //     })
    //     .catch(err => {

    //         console.log("Error", err);

    //     });


    return {

        data,
        direccion,
        lat,
        lon

    }

}


module.exports = {
    getLugarLatLong
}