const express = require('express');
const productRouter = express.Router();
const Product = require('../models/product');


//Index Route
productRouter.get('/', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('products/index.ejs', {
            products: allProducts,
        });
    });
});

//New Route
productRouter.get('/new', (req, res) => {
    res.render('products/new.ejs')
});

//Delete Route
productRouter.delete('/:id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/products')
    });
});

//Update Route
productRouter.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, 
        (error, updateProduct) => {
        res.redirect(`/products/${req.params.id}`)
    });
});

//Create Route
productRouter.post('/', (req, res) => {
    Product.create(req.body, (error, createdProduct) => {
        res.redirect('/products')
    });
});

//Edit Route
productRouter.get('/:id/edit', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('products/edit.ejs', {
            product: foundProduct,
        });
    });
});

//Show Route
productRouter.get('/:id', (req, res) => {
    Product.findById(req.params.id, (error, foundProduct) => {
        res.render('products/show.ejs', {
            products: foundProduct,
        });
        
    });
});

















module.exports = productRouter