var express = require('express');
var router = express.Router();



/* adminUpdate page. */
router.get('/admin/update/:id', function(req, res, next) {
    var id = req.params.id
    if(id){
        Movie.findById(id,function(err, movie){
            res.render('admin', {
                title: '后台更新页面',
                movie: movie
               });
        })
    }
});

module.exports = router;
