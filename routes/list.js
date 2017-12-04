var express = require('express');
var router = express.Router();


/* List page. */
router.get('/admin/list', function(req, res, next) {
  Movie.fetch(function(err,movies){
      if(err){
          console.log(err)
      }
      res.render('list', {
        title: '列表页面',
        movies: movies
       });
  })
  
});

module.exports = router;
