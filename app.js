var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var _ = require('underscore')
mongoose.Promise = require('bluebird')
var Movie = require('./models/movie')
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
// var users = require('./routes/users');
// var detail = require('./routes/detail');
// var admin = require('./routes/admin');
// var list = require('./routes/list');
// var adminPost = require('./routes/adminPost');
// var adminUpdate = require('./routes/adminUpdate');

var app = express();

// mongoose.connect('mongodb://127.0.0.1/movie', {useMongoClient: true})



// mongodb

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/movie'; 
 
// var insertData = function(db, callback) {  
//     //连接到表 site
//     var collection = db.collection('site');
//     //插入数据
//     var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
//     collection.insert(data, function(err, result) { 
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }     
//         callback(result);
//     });
// }
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    // insertData(db, function(result) {
    //     console.log(result);
    //     db.close();
    // });
});





// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));


app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.locals.moment = require('moment')

app.use('/', index);
// app.use('/', users);
// app.use('/', detail);
// app.use('/', admin);
// app.use('/', list);
// app.use('/', adminPost);
// app.use('/', adminUpdate);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3001)
module.exports = app;
