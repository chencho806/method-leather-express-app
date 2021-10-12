const express = require('express');
const customRouter = express.Router();
const Custom = require('../models/custom');

//Index Route
customRouter.get('/', (req, res) => {
    res.render('custom/index.ejs')
});
















module.exports = customRouter