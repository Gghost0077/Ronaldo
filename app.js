const express = require("express");
const app = express();
const fs = require('fs');

app.use(express.static('client'));
app.use(express.json());

module.exports = app;