const express = require('express');
const customRouter = express.Router();
const Custom = require('../models/custom');

//Index Route
customRouter.get('/', (req, res) => {
    Custom.find({}, (error, custom) => {
        res.render('custom/index.ejs', {
            custom
        });
    });
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


//Show Route
customRouter.get('/:id', (req, res) => {
    Custom.findById(req.params.id, (error, custom) => {
        console.log(custom)
        res.render('custom/show.ejs', {
            custom
        });
        
    });
});














module.exports = customRouter