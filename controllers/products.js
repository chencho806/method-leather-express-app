const express = require('express');
const productRouter = express.Router();
const Product = require('../models/product');

//New Route
productRouter.get('/new', (req, res) => {
    res.render('new.ejs')
});


//Create Route
productRouter.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {

        res.send(createdProduct)
    });
});










module.exports = productRouter