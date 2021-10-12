const express = require('express');
const customRouter = express.Router();
const Custom = require('../models/custom');

//Index Route
customRouter.get('/', (req, res) => {
    res.render('custom/index.ejs')
});

//New Route
customRouter.get('/new', (req, res) => {
    res.render('custom/new.ejs')
});


//Create Route
customRouter.post('/', (req, res) => {
    Custom.create(req.body, (error, createdProduct) => {
        res.redirect('/custom/show.ejs')
    });
});















module.exports = customRouter