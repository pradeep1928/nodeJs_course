const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6e1f29647e7b1289cd33241c5e112c55&query=London,%20United%20Kingdom'

request({url: url}, (error, res) => {
    const data = JSON.parse(res.body);
    console.log(data.current)
})