var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: '首页',
     movies:[
       {
        title:'机械战警',
        _id : 1,
        poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2022193864,2006571232&fm=58'     
       },
       {
        title:'机械战警',
        _id : 2,
        poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2022193864,2006571232&fm=58'     
       },
       {
        title:'机械战警',
        _id : 3,
        poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2022193864,2006571232&fm=58'     
       },
       {
        title:'机械战警',
        _id : 4,
        poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2022193864,2006571232&fm=58'     
       },
       {
        title:'机械战警',
        _id : 5,
        poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2022193864,2006571232&fm=58'     
       },
       {
        title:'机械战警',
        _id : 6,
        poster:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2022193864,2006571232&fm=58'     
       },
     ]
    });
});

module.exports = router;
