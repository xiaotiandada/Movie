var mongoose = require('mongoose')
var MovieSchema = require('../schemas/movie')
<<<<<<< HEAD


// 编译生成movie模型  
var Movie = mongoose.model('Movie',MovieSchema)

// 将movie模型导出  
=======
var Movie = mongoose.model('Movie',MovieSchema)

>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
module.exports = Movie