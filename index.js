//Runs the Server Entrypoint
require('dotenv').config()
const port = process.env.PORT
const app = require("./app")

app.listen(port, () => {
    console.log(`Simple api listening on port ${port}`)
})

// app.get('/', (req, res) => {
//     res.send({"Welcome": "Hello World"})
//     })

// app.get('/query', (req, res) => {
//     res.send(req.query)
// })

// app.get('/param/:id', (req, res) => {
//     res.send(req.param)
// })

app.get('/', (req, res) => {
   res.send("Hello form the fruits API") })