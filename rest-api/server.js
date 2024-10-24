// Importer Express-applikationen fra src/app.js
const app = require('../app');
const port = 3000;

// Start serveren og lyt på den angivne port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
