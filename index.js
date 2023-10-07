const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000

app.use(cors());

const chefsDetails = require('./data/ChefData.json')

app.get('/', (req, res) => {
    res.send("Hello World!");
})

app.get('/chefs', (req, res) => {
    res.send(chefsDetails);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chefDetail = chefsDetails.find(c => c.id == id);

    res.send(chefDetail);
})


app.listen(port, () => {
    console.log(`${port} on listening`)
})