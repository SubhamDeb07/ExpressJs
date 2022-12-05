const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contacRoutes = require('./routes/contact')
const successRoute = require('./routes/successful')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contacRoutes)
app.use(successRoute)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'errorPage.html'));
});

app.listen(3000);
