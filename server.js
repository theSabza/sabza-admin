/*
 * Primary Application - Core API
 * Starting Server End Point : server.js
 * 
 */

const express = require('express');
const app = express();
const port = 3101;

app.get('/', (req, res) => {
    res.send('Sabza Admin Frontend Server ');
});

app.get('/hello', (req, res) => {
    res.send('World');
});

app.listen(port);
console.log('Sabza Core API Application Server started on port ' + port)
