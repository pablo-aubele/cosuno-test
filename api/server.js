const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const companies = require('./companies');

app.get('/v1/companies', (req, res) => {
    res.json(companies);
});

app.listen(3000, () => console.log(`API listening on host ${process.env.API_URL}`));