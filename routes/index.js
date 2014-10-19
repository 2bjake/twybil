var express = require('express');
var router = express.Router();

//TODO: where should this go?
// defines the order, labels, and urls for the header nav
var navInfo = [
  {name: 'Home', url: '/'},
  {name: 'Projects', url: '/projects'},
  {name: 'Contact', url: '/contact'},
  {name: 'About', url: '/about'}
];

function renderHelper(url, template) {
  var nav = [];
  for(var i = 0; i < navInfo.length; i++) {
    nav.push({info: navInfo[i], active: url === navInfo[i].url});
  }

  return function(req, res) {
    res.render(template, {nav: nav});
  };
}

router.get('/', renderHelper('/', 'index'));

router.get('/projects', renderHelper('/projects', 'projects'));

router.get('/contact', renderHelper('/contact', 'contact'));

router.get('/about', renderHelper('/about', 'about'));

module.exports = router;
