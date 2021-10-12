const express = require('express');
const productRouter = express.Router();
const Product = require('../models/product');


//Index Route
productRouter.get('/', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('index.ejs', {
            products: allProducts
        })
    });
});

//New Route
productRouter.get('/new', (req, res) => {
    res.render('new.ejs')
});


//Create Route
productRouter.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {

        res.redirect('/products')
    });
});


















module.exports = productRouter