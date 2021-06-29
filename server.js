//Importation module
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const route = require('./route')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', route);
app.listen(PORT, ()=>{
    console.log("runnig on port", PORT)
})
