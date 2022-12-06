const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contacRoutes = require('./routes/contact')
const successRoute = require('./routes/successful')

const errorController = require('./Controllers/404')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contacRoutes)
app.use(successRoute)
app.use(errorController.error)

app.listen(3000);
