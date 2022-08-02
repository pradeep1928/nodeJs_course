const request = require('request');

const geoCode = (address, cb) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicHJhZGVlcDE5MTAiLCJhIjoiY2tvaWk3and2MDBhdzJubWx4Nmt6bWllOCJ9.gsay9c1r0Pj3mC0F5ivnYg`

    request({url: url, json:true}, (error, res) => {
        if (error) {
            cb('Unable to connect to location service.', undefined)
        } else if (res.body.features.length == 0) {
            cb("Unable to find the location.", undefined)
        } else {
            cb(undefined, {
                 longitute: res.body.features[0].center[0],
                 lattitude: res.body.features[0].center[1],
                 location: res.body.features[0].place_name
            })
        }
    })
}


module.exports = geoCode;