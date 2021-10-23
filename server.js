const fs = require('fs');
const path = require('path');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

const rootDirectory = path.join(__dirname, 'public');

// Allows use of files within 'public' directory that are mentioned
app.use(express.static(rootDirectory));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on PORT ${PORT}!`);
});