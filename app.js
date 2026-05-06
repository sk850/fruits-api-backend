//Adds middleware for fruits endpoint by calling router for fruits (Middleware)
//Builder
const express = require('express')
const app = express();
const fruitsRouter = require("./routes/fruits");


app.use(express.json())
app.use('/fruits', fruitsRouter) //calls router for every /fruits endpoint

module.exports = app