require("dotenv").config();
const express = require('express')
const routes = require('./routes')
const app = express()

const port = 3001
routes(app)

app.listen(port, () => {
    console.log(`Servidor: ON, na porta ${port}`)
})

module.exports = app