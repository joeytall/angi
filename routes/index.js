var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  renderPage(res);
});

function renderPage(res){
  res.render('index',{
    title: "Terminator",
  });
}

module.exports = router;
