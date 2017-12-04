var express = require('express');
var router = express.Router();


var Movie = require('../schemas/movie')


/* GET home page. */
router.get('/', function(req, res, next) {
  movie.fetch(function(err, movies){
    if(err){
      console.log(err)
    }
    res.render('index', {
     title: '首页',
     movies:movies
    });
  })
  
});

module.exports = router;
