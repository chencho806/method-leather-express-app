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

//Delete Route
customRouter.delete('/:id', (req, res) => {
    Custom.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/custom')
    });
});

//Create Route
customRouter.post('/', (req, res) => {
    Custom.create(req.body, (error, custom) => {
        res.redirect('/custom')
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