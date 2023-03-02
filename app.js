const express = require('express');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
mongoose.connect('mongodb://localhost:27017/freshshop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected");
});
const app = express();
app.engine('ejs', ejsMate);
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {

    res.render('home');

})
app.get('/about', (req, res) => {
    res.render('about')

})
app.get('/shop', (req, res) => {
    res.render('shop')

})
app.get('/shop-detail', (req, res) => {
    res.render('shop-detail')

})
app.get('/cart', (req, res) => {
    res.render('cart')

})
app.get('/checkout', (req, res) => {
    res.render('checkout')

})
app.get('/account', (req, res) => {
    res.render('my-account')

})
app.get('/wishlist', (req, res) => {
    res.render('wishlist')

})
app.get('/gallery', (req, res) => {
    res.render('gallery')

})
app.get('/contactUs', (req, res) => {
    res.render('contact-us')

})

app.listen(3000, () => {
    console.log('Serving on port 3000');
})