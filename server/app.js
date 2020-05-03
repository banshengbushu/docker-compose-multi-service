'use strict';

const express = require('express');
const {pool} = require('./config');
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/api/hello-world', (req, res) => {
  res.send('Hello World');
});

const getBooks = (req, res) => {
  pool.query('SELECT * FROM books', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
}

app.route('/api/postgres').get(getBooks)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
