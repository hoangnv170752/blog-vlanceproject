const path = require('path');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 5000;
const db = require('./db/database');

app.use(express.json());
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`);
})