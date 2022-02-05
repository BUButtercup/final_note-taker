const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/pages/notes.html')));

app.listen(PORT, () => console.log(`Listening on ${PORT}.`));
