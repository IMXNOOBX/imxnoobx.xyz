const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.json())
app.use(express.static(`${__dirname}/html`))
const abs = path.join(`${__dirname}/html`)


app.get('/',function(req,res) {
    res.sendFile(`/index.html`);
});

app.use(function(req, res, next) {
    res.status(404).sendFile(`${abs}/errors/404.html`);
});

app.listen(80, () => {
    console.log('listening on port 80')
})