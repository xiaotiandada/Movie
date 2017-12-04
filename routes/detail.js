var express = require('express');
var router = express.Router();



/* Detail page. */
router.get('/movie/:id', function(req, res, next) {
  var id = req.params.id

  Movie.findById(id,function(err, movie){
    res.render('detail', {
        title: movie.title,
        movie: movie
    });
  })
  
});

module.exports = router;
