const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=6e1f29647e7b1289cd33241c5e112c55&query=Mumbai&units=m`

const request = http.request(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()