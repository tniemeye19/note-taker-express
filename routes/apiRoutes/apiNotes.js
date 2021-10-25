const { createNewNote, validateNote, deleteNote } = require('../../lib/notes');
const { notes }  = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
    console.log(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted.');
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    let singleNoteId = req.params.id;

    
});

module.exports = router;