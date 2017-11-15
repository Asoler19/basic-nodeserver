var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', {
       title: 'Express', 
       name: 'Bucky'
    });
});

module.exports = router;