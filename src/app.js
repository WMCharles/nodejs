const express = require('express');
const app = express();
const PORT = 3000

// data 
const people = [
    {
        "name": "Geoffrey",
        "industry":"Economics && Statistics"
    },
    {
        "name": "Lewis",
        "industry": "Tech"
    },
    {
        "name": "Jonte",
        "industry": "Writing"
    }
]

app.get('/', (req, res, next) => {
    res.send("Welcome!");
})

app.get('/api/customers', (req, res, next) => {
    res.send({ "customers": people });
})

app.post('/', (req, res, next) => {
    res.send("Hello This is a POST request!")
})

// message on terminal
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
})