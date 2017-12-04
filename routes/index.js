var express = require('express');
var router = express.Router();


var Movie = require('../schemas/movie')


/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  movie.fetch(function(err, movies){
    if(err){
      console.log(err)
    }
    res.render('index', {
     title: '首页',
     movies:movies
    });
=======
  Movie.fetch(function(err,movies){
    if(err){
      console.log(err);
    }
    res.render('index', {
      title: '首页',
      movies: movies
     });
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
  })
  
});

module.exports = router;
