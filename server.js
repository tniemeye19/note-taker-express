const express = require('express');
const path = require('path');

const app = express();

const { notes } = require('./db/db.json');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/notes', (req, res) => {
    res.json(notes);
    console.log(notes);
});

app.get('/notes', (req, res)=> {

    res.sendFile(__dirname + '/public/notes.html')
})

app.get('*', (req, res)=> {
    res.sendFile('index.html')
})

app.listen(3001, () => {
    console.log(`API server now on PORT 3001!`);
})