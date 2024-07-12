var express = require('express');
var router = express.Router();

let dishes = require('../data/dishes.json');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {dishes});
});

router.get('/menu/:id', function (req, res, next) {
  let id = req.params.id;
  res.render('detalleMenu', {dishes: dishes, id: id});
});

module.exports = router;
