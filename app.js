var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// mongoose
var mongoose = require('mongoose');
var _ = require('underscore')
mongoose.connect('mongodb://localhost/movie', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Movie = require('./models/movie')




// var index = require('./routes/index');
// var users = require('./routes/users');
// var detail = require('./routes/detail');
// var admin = require('./routes/admin');
// var list = require('./routes/list');

var app = express();

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
