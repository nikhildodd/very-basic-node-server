
const express = require('express')
const app = express()

const port = 3030


const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let person = JSON.parse(rawdata);


// Start the server using app.listen()

app.use(express.urlencoded({
    extended: true
}))

app.listen(port, () => {
    console.log("listening on 3030")
})

app.get('/', (req, res) => {
    res.send("home")
})
app.get('/foo', (req, res) => {
    res.json({ "foo": "uh"})
})

app.post('/bar', (req, res) => {
    let body = req.body
    // foo is the key we made in the previous function
    res.send(req.body.foo)
})
