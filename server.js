const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const productsController = require('./controllers/products.js');
const DATABASE_URL = process.env.DATABASE_URL
require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL);





const db = mongoose.connection;

db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));



app.use('/products', productsController);















const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});