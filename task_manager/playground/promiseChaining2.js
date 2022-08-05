require('../src/db/mongoose')
const Task = require('../src/models/task')


// Deleting the document and getting the count of remaining docs 
Task.findByIdAndDelete('62ebd177626af4ddffa007aa').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

