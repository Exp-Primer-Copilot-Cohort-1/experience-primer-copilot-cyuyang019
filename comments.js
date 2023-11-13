// Create web server using express
// Create a route for /comments
// Respond with a JSON object containing some mock data
// Start the web server on port 3000

// Load express module
const express = require('express');

// Create express app
const app = express();

// Create a route for /comments
app.get('/comments', (req, res) => {
  // Respond with JSON object
  res.json({
    comments: [
      {
        id: 1,
        body: 'some comment',
      },
      {
        id: 2,
        body: 'some other comment',
      },
    ],
  });
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
