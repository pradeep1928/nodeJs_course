const request = require('request')
const geoCode = require('./utils/geoCode')

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

geoCode('Mumbai', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})