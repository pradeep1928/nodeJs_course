const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

geoCode('Mumbai', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})

forecast('Mumbai', (error, data) => {
    console.log('Error', error);
    console.log('Data', data)
})