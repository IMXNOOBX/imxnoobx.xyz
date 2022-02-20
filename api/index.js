const express = require('express')
const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')    
})


app.listen(80, () => {
    console.log('listening on port 80')
})