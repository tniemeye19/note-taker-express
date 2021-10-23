const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
// variable to contain file path from public folder
const rootDirectory = path.join(__dirname, 'public');
// Notes variable for all notes within 
const notes = require('./db/db.json');
// Allows use of files within 'public' directory that are mentioned
app.use(express.static(rootDirectory));

app.get('/api/notes', (req, res) => {
    res.json(notes);
    console.log('server.js line 12', notes);
});
// On 'Get Started' click from index.html, sends you to notes.html
app.get('/notes', (req, res)=> {
    res.sendFile(path.join(rootDirectory, 'notes.html'));
})
// Takes you to home page on invalid address
app.get('*', (req, res)=> {
    res.sendFile(path.join(rootDirectory, 'index.html'));
})

app.listen(3001, () => {
    console.log(`API server now on PORT 3001!`);
})