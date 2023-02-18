const express = require('express');
const app = express();

// for uploading data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.post('/', (req, res, next) => {
    res.send("Hello This is a POST request!")
})

// CUSTOMERS
// GET /customers
app.get('/api/customers', (req, res, next) => {
    res.send({ "customers": people });
})

// POST /customers
app.post('/api/customers', (req, res) => {
    res.send(req.body)
});

// message on terminal
app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
})