var express = require('express');
var router = express.Router();

/* Admin page. */
router.get('/admin/movie', function(req, res, next) {
  res.render('admin', {
     title: '后台页面',
     movie:{
        title:'',
        doctor:'',
        country:'',
        year:'',
        poster:'',
        flash:'',
        summary:'',
        language:''
    }
    });
});

module.exports = router;
