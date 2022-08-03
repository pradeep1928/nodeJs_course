const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

// console.log(path.join(__dirname))
// console.log(path.join(__filename))

const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.send("this is get")
})


app.listen(3000, () => {
    console.log('server is running on port 3000')
})