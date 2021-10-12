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

//Delete Route
productRouter.delete('/:id', (req, res) => {
    res.send('deleting...')
});

//Create Route
productRouter.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {

        res.redirect('/products')
    });
});


//Show Route
productRouter.get('/:id', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('show.ejs', {
            products: foundProduct
        })
        
    });
});

















module.exports = productRouter