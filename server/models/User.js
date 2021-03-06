const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email:{
        type:String, 
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
       type:Number,
       default:0
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{
        type: Number
    }
})

//schema를 model로 감싸기
const User=mongoose.model('User', userSchema)   
//밖에서도 쓸수있게 export해주기
module.exports = { User }