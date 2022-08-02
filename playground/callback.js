setTimeout(() => {
    console.log("after two seconds")
}, 2000);


const geoCode = (add, callback) => {
    setTimeout(() => {
        let data = {
            longitude: 0,
            lattitude: 0
        }
        callback(data)
    }, 2000);
}

geoCode('Mumbai', (data) => {
    console.log(data)
})


// add function using callback 
const add = (a, b, cb) => {
    setTimeout(() => {
        cb(a + b)
    }, 2000);
}

add(3, 5, (sum) => {
    console.log(sum)
})