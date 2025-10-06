const express = require('express')
const app = express()
const path = require('path')
const webSocket = require('express-ws')
webSocket(app)

app.use(express.static('public'))

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/client.html'))
})

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin.html'))
})

app.ws('/', handleWs)

let admin = null, clients = []

function handleWs(ws){
    ws.on('message', (m) => {
        const message = JSON.parse(m)
        if(message.type == 'admin-connect'){
            admin = ws
            console.log("Admin connected.")
        }
        else if(message.type == 'client-connect'){
            clients.push(ws)
            console.log("New Client connected.")
        }
        else if(message.type == 'interaction'){
            if(admin) admin.send(m)
        }
    })

    ws.on('close', () => {
        if(admin == ws){
            admin = null
            console.log('Admin disconnected.')
        }
        else{
            const idx = clients.findIndex(el => el === ws)
            if(idx != -1){
                clients.splice(idx, 1)
                console.log('Client disconnected.')
            }
        }
    })
}