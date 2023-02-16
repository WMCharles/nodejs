const express = require('express');
const app = express();
const PORT = 3000

app.get('/', (req, res, next) => {
    res.send("Hello Express!")
})

app.post('/', (req, res, next) => {
    res.send("Hello This is a post request!")
})

// message on terminal
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT );
})