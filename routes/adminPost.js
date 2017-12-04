var express = require('express');
var router = express.Router();

/* adminPos page. */
router.post('/admin/movie/new', function(req, res) {
  var id = req.body.movie._id
  var movieObj = req.body.movie
  var _movie

  if(id !== 'undefined'){   // 存在更新
      Movie.findById(id,function(err,movie){
          if(err){
              console.log(err);
          }

          _movie = _.extend(movie, movieObj)
          _movie.save(function(err, movie){
              if(err){
                  console.log(err)
              }

              res.redirect('/movie/',movie._id)
          })
      })
  } else {
      _movie = new Movie({
          doctor : movieObj.doctor,
          title : movieObj.title,
          country : movieObj.country,
          language : movieObj.language,
          year : movieObj.year,
          poster : movieObj.poster,
          summary : movieObj.summary,
          flash : movieObj.flash
      })

      _movie.save(function(err,movie){
          if(err){
              console.log(err);
          }

          res.redirect('/movie/'+ movie._id)
      })
  }
});

module.exports = router;
