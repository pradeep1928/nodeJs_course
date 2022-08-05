require('../src/db/mongoose')
const Task = require('../src/models/task')


// // Deleting the document and getting the count of remaining docs with .then method
// Task.findByIdAndDelete('62ebd177626af4ddffa007aa').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments( { completed: false } )
    return count
}

deleteTaskAndCount('62ebab29be3ad6a3195def74').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})