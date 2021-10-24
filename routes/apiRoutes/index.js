const router = require('express').Router();

const noteRoutes = require('../apiRoutes/apiNotes');
router.use(noteRoutes);

module.exports = router;