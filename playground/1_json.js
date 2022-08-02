
// const fs = require('fs');

// // const book = {
// //     title: 'Ego is the enemy',
// //     author: 'Ryan Holiday'
// // }

// // let bookJson = JSON.stringify(book);
// // console.log(bookJson)

// // let parseData = JSON.parse(bookJson)
// // console.log(parseData)

// // fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// console.log(dataJson)
// const data = JSON.parse(dataJson);
// console.log(data)
// data.title = 'Who will cry when you die'
// data.author = "Tony Robbin"
// console.log(data.title)
// console.log(data.author)
// console.log(data)

// const dataToJson = JSON.stringify(data)
// fs.writeFileSync('1-json.json', dataToJson)


let arr = [1, 3, 4, 6, 1, 3];

const filter = arr.filter((val, ind) => {
    return arr.indexOf(val) == ind
})

console.log(filter)