const express = require("express")
const app = express()
const path = require('node:path');
var port = 8081; // customized'
const htmlPath = `${__dirname}/html/`
app.get('/', (req, res) => {
    res.sendFile(htmlPath + "index.html")
})
app.listen(port, () => {
    console.log("Listening on port", port)
})