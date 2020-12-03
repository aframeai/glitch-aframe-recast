const express = require('express');
const app = require('./function');

// port for navmesh service
const PORT = process.env.PORT || 3000;

// serve public directory
app.use(express.static('public'));

// start express server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

