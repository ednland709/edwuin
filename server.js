// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongodb = require('mongodb');

// Get our API routes
const api = require('./server/routes/api');
const app = express();

var MongoClient = require('mongodb').MongoClient;
var db;

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(function(req, res, next) {
    req.db = db;
    next();
});
  
// Set our api routes
app.use('/api', api);
//my apis definition
const dynamics = require('./server/routes/dynamics');
app.use('/api/dynamics', dynamics);
const menus = require('./server/routes/global/menus');
app.use('/api/menu', menus);
const user = require('./server/routes/global/user');
app.use('/api/user', user);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
MongoClient.connect("mongodb://localhost:27017/datae", function(err, database) {
  if(err) throw err;

  db = database;

  // Start the application after the database connection is ready
  server.listen(port, () => console.log(`API running on localhost:${port}`));
});


