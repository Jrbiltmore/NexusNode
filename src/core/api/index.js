
const express = require('express');
const apiRoutes = require('./apiRoutes');
const apiDocs = require('./apiDocs');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/docs', apiDocs);

module.exports = app;
