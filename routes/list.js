var express = require('express');
var router = express.Router();

/* List page. */
router.get('/', function(req, res, next) {
  res.render('list', {
     title: '列表页面',
     movies:[{
        title:'机械战警',
        _id:1,
        doctor:'何塞·帕迪里亚',
        country:'美国',
        year:2014,
        language:'英语',
        flash:'http://get.adobe.com/cn/flashplayer/'
    }]
    });
});

module.exports = router;
