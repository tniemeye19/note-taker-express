const { application } = require('express');
const express = require('express');

const app = express();

const { notes } = require('./db/db.json');

app.get('/db/notes', (req, res) => {
    res.json(notes);
    console.log(notes);
});

app.listen(3001, () => {
    console.log(`API server now on PORT 3001!`);
})