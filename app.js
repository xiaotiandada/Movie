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

<<<<<<< HEAD

// mongoose
var mongoose = require('mongoose');
var _ = require('underscore')
mongoose.connect('mongodb://localhost/movie', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Movie = require('./models/movie')




// var index = require('./routes/index');
=======
var index = require('./routes/index');
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
// var users = require('./routes/users');
// var detail = require('./routes/detail');
// var admin = require('./routes/admin');
// var list = require('./routes/list');
<<<<<<< HEAD
=======
// var adminPost = require('./routes/adminPost');
// var adminUpdate = require('./routes/adminUpdate');
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.locals.moment = require('moment')

<<<<<<< HEAD
// app.use('/', index);
// app.use('/users', users);
// app.use('/', detail);
// app.use('/admin/movie', admin);
// app.use('/admin/list', list);

// index  
app.get('/', function (req, res) {  
  Movie.fetch(function (err, movies) {  
      if (err) {  
          console.log(err);  
      }  
      res.render('index', {  // 渲染index 首页  
          title: '电影首页',  
          movies: movies  
      });  
  });  
});  

app.get('/movie/:id',function(req,res){
  var id= req.params.id
  Movie.findById(id,function(err,movie){
    res.render('detaili',{
      title: movie.title,
      movie : movie
    })
  })
})

app.get('/admin/movie',function(req,res){
  res.render('admin',{
    title:'后台录入页面',
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
  })
})


app.get('/admin/update/:id',function(req,res){
  var id = req.params.id

  if(id){
    Movie.findById(id, function(err, movie){
      res.render('admin',{
        title: '后台更新页面',
        movie:movie
      })
    })
  }
})

app.post('/admin/movie/new',function(req,res){
  var id = req.body.movie._id
  var movieObj = req.body.movie
  var _movie

  if(id !== 'undefined'){
    Movie.findById(id, function(err,movie){
      if(err){
        console.log(err);
      }

      _movie = _.extend(movie, movieObj)
      _movie.save(function(err,movie){
        if(err){
          console.log(err)
        }
        res.redirect('/movie/'+ movie._id)
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
        console.log(err)
      }
      res.redirect('/movie/'+ movie._id)
    })
  }
})


app.get('/admin/list',function(req,res){
  Movie.fetch(function(err,movies){
    if(err){
      console.log(err)
    }
    res.render('list',{
      title: '列表页',
      movies:movies
    })
  })
})









=======
app.use('/', index);
// app.use('/', users);
// app.use('/', detail);
// app.use('/', admin);
// app.use('/', list);
// app.use('/', adminPost);
// app.use('/', adminUpdate);
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788

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





// var Cat = mongoose.model('Cat', { name: String });

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

app.listen(3001)
module.exports = app;
