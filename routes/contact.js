const path = require('path');

const express = require('express');

const contactController = require('../Controllers/contactPage')

const router = express.Router();

router.get('/contactus', contactController.getHelp)

router.post('/contactus', contactController.postHelp)
  

module.exports = router;
