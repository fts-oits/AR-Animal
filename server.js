const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Use port from environment variable or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
