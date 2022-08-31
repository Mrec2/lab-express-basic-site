const express = require('express');

const hbs = require('hbs');
const path = require('path');


const app = express();


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(path.join(__dirname, 'views/partials'))


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/works', (req, res) => {
    res.render('works');
})

app.get('/gallery', (req, res) => {
    const paths = ['/images/fast.webp', '/images/vin.webp', '/images/vin2.png']
    res.render('gallery', { paths });
})







app.listen(3000, () => console.log('🏃‍ on port 3000'));
