var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Confort Corner' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About This Website' });
});

router.get('/sleep-better', function (req, res, next) {
  res.render('sleep_better', {
    title: 'Sleep Better'
  });
});

router.get('/manage-axiety', function (req, res, next) {
  res.render('manage_axiety', {
    title: 'Manage Axiety'
  });
});

router.get('/cope-with-stress', function (req, res, next) {
  res.render('cope_with_stress', {
    title: 'Cope With Stress'
  });
});

module.exports = router;
