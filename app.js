require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts')

const app = express();
const PORT = 4000 || process.env.PORT;

app.use(express.static('public'));

app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', require('./server/routes/main'));

app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}`);
});