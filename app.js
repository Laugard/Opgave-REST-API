const express = require('express');
const app = express();

// Importer itemRoutes fra den nye sti
const itemRoutes = require('./rest-api/routes/itemRoutes');

// Middleware til at parse JSON
app.use(express.json());

// Brug itemRoutes til at håndtere alle ruter der starter med /items
app.use('/items', itemRoutes);

// Definer en grundlæggende GET-rute til rod-URL'en
app.get('/', (req, res) => {
    res.send('Welcome to the REST API!');
});

// Fejlhåndtering
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!' });
});

// Håndtering af 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = app;
