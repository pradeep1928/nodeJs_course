books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
];

// console.log(books)

let newarr = [];
let uniqueObj = {};

for (let i in books) {
    objTitle = books[i]['title'];
    console.log(books[i]['title'])
    uniqueObj[objTitle] = books[i]
    console.log(uniqueObj['C++'])
}

for (let i in uniqueObj) {
    newarr.push(uniqueObj[i])
}

// console.log(newarr)