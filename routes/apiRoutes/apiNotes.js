const notes = require('../../db/db.json');
const router = require('express').Router();

router.use(notes);

module.exports = router;