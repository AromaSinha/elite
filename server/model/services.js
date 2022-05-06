const mongoose=require('mongoose');
const imageDb=require('./images')
const catSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
})
const serviceSchema=mongoose.Schema({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    categories:[catSchema],
    
    
})

const Servicedb=mongoose.model('services',serviceSchema)


module.exports=Servicedb;
