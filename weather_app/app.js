const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6e1f29647e7b1289cd33241c5e112c55&query=Mumbai&units=m'

request({url: url, json:true}, (error, res) => {
    if (error) {
        console.log('Unable to connect to weather service.')
    } else if(res.body.error) {
        console.log('Unable to find location.')
    } else {
        console.log(res.body.current.weather_descriptions[0])
        console.log(res.body.current.temperature)    
    }
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Mumbai.json?access_token=pk.eyJ1IjoicHJhZGVlcDE5MTAiLCJhIjoiY2tvaWk3and2MDBhdzJubWx4Nmt6bWllOCJ9.gsay9c1r0Pj3mC0F5ivnYg'

request({url: geocodeUrl, json:true}, (error, res) => {
    if (error) {
        console.log('Unable to connect to location service.')
    } else if (res.body.features.length == 0) {
        console.log("Unable to find the location.")
    } else {
        const longitute = res.body.features[0].center[0];
        const lattitude = res.body.features[0].center[1];
        console.log(longitute, lattitude)    
    }
})