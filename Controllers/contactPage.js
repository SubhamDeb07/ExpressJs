const path = require('path')

exports.getHelp =  (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
  }

  exports.postHelp = (req, res, next) => {
    console.log(req.body);
    res.redirect('/success');
  }

  exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'successful.html'));
  };
  