var express = require('express');
var router = express.Router();

//TODO: where should this go?
var menuLinks = [
  {name:"Home", url:"/"},
  {name:"Products", url:"/products"},
  {name:"Contact", url:"/contact"},
  {name:"About", url:"/about"}
];

router.get('/', function(req, res) {
  res.render('index', {menuLinks: menuLinks});
});

router.get('/products', function(req, res) {
  res.render('products', {menuLinks: menuLinks});
});

router.get('/contact', function(req, res) {
  res.render('contact', {menuLinks: menuLinks});
});

router.get('/about', function(req, res) {
  res.render('about', {menuLinks: menuLinks});
});

module.exports = router;
