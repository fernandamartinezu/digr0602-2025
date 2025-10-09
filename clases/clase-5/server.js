const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 8000 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, () => {
    console.log('App listening to port: ' + PORT)
})