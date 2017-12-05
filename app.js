var express = require('express');  // 加载express模块
var app = express(); // 启动Web服务器
var port = process.env.PORT || 3000; // 设置端口号：3000
app.listen(port); // 监听 port[3000]端口
console.log('website start on port' + port);
var path = require('path');

// // mongoose
var mongoose = require('mongoose');
var _ = require('underscore')
mongoose.connect('mongodb://localhost/movie', { useMongoClient: true });
mongoose.Promise = global.Promise;


// 引入path模块的作用：因为页面样式的路径放在了bower_components，告诉express，请求页面里所过来的请求中，如果有请求样式或脚本，都让他们去bower_components中去查找
// var mongoose = require('mongoose'); // 加载mongoose模块
// mongoose.connect('mongodb://localhost:27017/imovie'); // 连接mongodb本地数据库imovie
// console.log('MongoDB connection success!');
/*  mongoose 简要知识点补充
* mongoose模块构建在mongodb之上，提供了Schema[模式]、Model[模型]和Document[文档]对象，用起来更为方便。
* Schema对象定义文档的结构（类似表结构），可以定义字段和类型、唯一性、索引和验证。
* Model对象表示集合中的所有文档。
* Document对象作为集合中的单个文档的表示。
* mongoose还有Query和Aggregate对象，Query实现查询，Aggregate实现聚合。
* */
app.locals.moment = require('moment'); // 载入moment模块，格式化日期
var serveStatic = require('serve-static');  // 静态文件处理
app.use(serveStatic('public')); // 路径：public
var bodyParser = require('body-parser');
// 因为后台录入页有提交表单的步骤，故加载此模块方法（bodyParser模块来做文件解析），将表单里的数据进行格式化
app.use(bodyParser.urlencoded({extended: true}));
var _underscore = require('underscore'); // _.extend用新对象里的字段替换老的字段
app.set('views', './views/pages');     // 设置视图默认的文件路径
app.set('view engine', 'jade');  // 设置视图引擎：jade
var movie = require('./models/movie.js'); // 载入mongoose编译后的模型movie













// var express = require('express');
// var path = require('path');
// var mongoose = require('mongoose')
// var _ = require('underscore')
// mongoose.Promise = require('bluebird')
// var Movie = require('./models/movie')
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');


// // mongoose
// var mongoose = require('mongoose');
// var _ = require('underscore')
// mongoose.connect('mongodb://localhost/movie', { useMongoClient: true });
// mongoose.Promise = global.Promise;





// // var index = require('./routes/index');
// // var users = require('./routes/users');
// // var detail = require('./routes/detail');
// // var admin = require('./routes/admin');
// // var list = require('./routes/list');

// var app = express();

// // mongoose.connect('mongodb://127.0.0.1/movie', {useMongoClient: true})


// // mongodb

// var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://localhost:27017/movie'; 
 
// // var insertData = function(db, callback) {  
// //     //连接到表 site
// //     var collection = db.collection('site');
// //     //插入数据
// //     var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
// //     collection.insert(data, function(err, result) { 
// //         if(err)
// //         {
// //             console.log('Error:'+ err);
// //             return;
// //         }     
// //         callback(result);
// //     });
// // }
 
// MongoClient.connect(DB_CONN_STR, function(err, db) {
//     console.log("连接成功！");
//     // insertData(db, function(result) {
//     //     console.log(result);
//     //     db.close();
//     // });
// });





// // view engine setup
// app.set('views', path.join(__dirname, 'views/pages'));


// app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
// app.locals.moment = require('moment')

// // app.use('/', index);
// // app.use('/users', users);
// // app.use('/', detail);
// // app.use('/admin/movie', admin);
// // app.use('/admin/list', list);

// var Movie = require('./models/movie')


// // index  
// app.get('/', function (req, res) {  
//   Movie.fetch(function (err, movies) {  
//       if (err) {  
//           console.log(err);  
//       }  
//       res.render('index', {  // 渲染index 首页  
//           title: '电影首页',  
//           movies: movies  
//       });  
//   });  
// });  

// app.get('/movie/:id',function(req,res){
//   var id= req.params.id
//   Movie.findById(id,function(err,movie){
//     res.render('detaili',{
//       title: '电影：' + movie.title,  
//       movie: movie  
//     })
//   })
// })

// app.get('/admin/movie',function(req,res){
//   res.render('admin',{
//     title:'后台录入页面',
//     movie:{
//       title:'',
//       doctor:'',
//       country:'',
//       year:'',
//       poster:'',
//       flash:'',
//       summary:'',
//       language:''
//     }
//   })
// })


// app.get('/admin/update/:id',function(req,res){
//   var id = req.params.id

//   if(id){
//     Movie.findById(id, function(err, movie){
//       res.render('admin',{
//         title: '后台更新页面',
//         movie:movie
//       })
//     })
//   }
// })

// app.post('/admin/movie/new',function(req,res){
//   var id = req.body.movie._id
//   var movieObj = req.body.movie
//   var _movie

//   if(id !== 'undefined'){
//     Movie.findById(id, function(err,movie){
//       if(err){
//         console.log(err);
//       }

//       _movie = _.extend(movie, movieObj)
//       _movie.save(function(err,movie){
//         if(err){
//           console.log(err)
//         }
//         res.redirect('/movie/'+ movie._id)
//       })
//     })
//   } else {
//     _movie = new Movie({
//       doctor : movieObj.doctor,
//       title : movieObj.title,
//       country : movieObj.country,
//       language : movieObj.language,
//       year : movieObj.year,
//       poster : movieObj.poster,
//       summary : movieObj.summary,
//       flash : movieObj.flash
//     })
//     _movie.save(function(err,movie){
//       if(err){
//         console.log(err)
//       }
//       res.redirect('/movie/'+ movie._id)
//     })
//   }
// })


// app.get('/admin/list',function(req,res){
//   Movie.fetch(function(err,movies){
//     if(err){
//       console.log(err)
//     }
//     res.render('list',{
//       title: '列表页',
//       movies:movies
//     })
//   })
// })










// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });





// // var Cat = mongoose.model('Cat', { name: String });

// // var kitty = new Cat({ name: 'Zildjian' });
// // kitty.save(function (err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log('meow');
// //   }
// // });

// app.listen(3001)
// module.exports = app;




// 编写主要页面路由
// index page 首页
app.get('/', function (req, res) {
    movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('index', {  // 渲染index 首页
            title: '电影首页',
            movies: movies
        });
    });
});

// detail page 详情页
app.get('/movie/:id', function (req, res) {
    var id = req.params.id;
    movie.findById(id, function (err, movie) {
        res.render('detail', {
            title: '电影：' + movie.title,
            movie: movie
        });
    });
});

// admin page 后台录入页
app.get('/admin/movie', function (req, res) {
    res.render('admin', {
        title: '后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    });
});

// admin update movie 后台更新页
app.get('/admin/update/:id', function (req, res) {
    var id = req.params.id;
    if (id) {
        movie.findById(id, function (err, movie) {
            res.render('admin', {
                title: '后台更新页',
                movie: movie
            });
        });
    }
});

// admin post movie 后台录入提交
app.post('/admin/movie/new', function (req, res) {
    var id = req.body.movie._id;
    var movieObj = req.body.movie;
    var _movie = null;
    if (id !== 'undefined') { // 已经存在的电影数据
        movie.findById(id, function (err, movie) {
            if (err) {
                console.log(err);
            }
            _movie = _underscore.extend(movie, movieObj); // 用新对象里的字段替换老的字段
            _movie.save(function (err, movie) {
                if (err) {
                    console.log(err);
                }
                res.redirect('/movie/' + movie._id);
            });
        });
    } else {  // 新加的电影
        _movie = new movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            language: movieObj.language,
            year: movieObj.year,
            poster: movieObj.poster,
            summary: movieObj.summary,
            flash: movieObj.flash
        });
        _movie.save(function (err, movie) {
            if (err) {
                console.log(err);
            }
            res.redirect('/movie/' + movie._id);
        });
    }
});

// list page 列表页
app.get('/admin/list', function (req, res) {
    movie.fetch(function (err, movies) {
        if (err) {
            console.log(err);
        }
        res.render('list', {
            title: '电影列表',
            movies: movies
        });
    });
});

// list delete movie data 列表页删除电影
app.delete('/admin/list', function (req, res) {
    var id = req.query.id;
    if (id) {
        movie.remove({_id: id}, function (err, movie) {
            if (err) {
                console.log(err);
            } else {
                res.json({success: 1});
            }
        });
    }
});
