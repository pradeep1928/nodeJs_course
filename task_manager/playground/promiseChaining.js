require('../src/db/mongoose')
const User = require('../src/models/user')

// // Use of .then method with mongoose 
// User.findByIdAndUpdate("62ebd220b03073def61c51b5", { age: 35}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 34})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


// use of async-await 
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('62ebd220b03073def61c51b5', 30).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})