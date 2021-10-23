const notes = require('../../db/db.json');
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    res.json(notes);
    console.log('server.js line 12', notes);
});


module.exports = router;