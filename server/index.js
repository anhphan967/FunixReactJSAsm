const express = require('express');
const path = require('path');

const app = express();

const buildDir = path.join(__dirname, '../build');

// Serve the static files from the React app
app.use('/', express.static(buildDir));
// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);

console.log('React.JS App is running on the port ' + port);