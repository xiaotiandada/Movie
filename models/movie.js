var mongoose = require('mongoose')
var MovieSchema = require('../schemas/movie')


// 编译生成movie模型  
var Movie = mongoose.model('Movie',MovieSchema)

// 将movie模型导出  
module.exports = Movie