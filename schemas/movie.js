var mongoose = require('mongoose')

<<<<<<< HEAD
var MovieSchema = new mongoose.Schema({
=======
var Schema = mongoose.Schema


var MovieSchema = new Schema({
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
    doctor:String,
    title:String,
    language:String,
    country:String,
    summary:String,
    flash:String,
    poster:String,
    year:Number,
<<<<<<< HEAD
    meta:{                     // meta 更新或录入数据的时间记录  
        createAt: {
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
=======
    meta:{
        createAt:{
            type:Date,
            default: Date.now()
        },
        updateAt:{
            type: Date,
            default: Date.now()
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
        }
    }
})

<<<<<<< HEAD
MovieSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else{
        this.meta.updateAt = Date.now()
    }
=======
MovieSchema.pre('save',function(){
    if(this.isNew){
        this.meta.createAt = this.meta.updateAt = Date.now()
    }else{
        this.meta.updateAt = Date.now()
    }

>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
    next()
})

MovieSchema.statics = {
<<<<<<< HEAD
    fetch : function(cb){
=======
    fetch: function(cb){
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
        return this
            .find({})
            .sort('meta.updateAt')
            .exec(cb)
    },
    findById:function(id, cb){
        return this
<<<<<<< HEAD
            .findOne({_id: id})
=======
            .findOne({_id:id})
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
            .exec(cb)
    }
}

<<<<<<< HEAD
module.exports = MovieSchema


=======
module.exports = MovieSchema
>>>>>>> 3982a7af592bcf5da82f44498cfd06682eded788
