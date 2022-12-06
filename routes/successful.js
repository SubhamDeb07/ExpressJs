const path = require('path');

const express = require('express');

const contactController = require('../Controllers/contactPage')

const router = express.Router();

router.get('/success', contactController.getSuccess)
module.exports = router;
